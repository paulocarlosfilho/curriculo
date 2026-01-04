
import React, { useState, useEffect } from 'react';
import { CONTACT_DATA, PROJECTS } from './constants';

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const saveVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${CONTACT_DATA.name}
ORG:SRE / DevOps Specialist
TITLE:${CONTACT_DATA.title}
TEL;TYPE=CELL:${CONTACT_DATA.phone}
EMAIL:${CONTACT_DATA.email}
URL:${CONTACT_DATA.portfolio}
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${CONTACT_DATA.name.replace(' ', '_')}.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-y-auto py-12 px-4">
      {/* Background: Tech/DevOps Theme */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-black/60 to-black"></div>
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>

      {/* Container Principal do Cartão */}
      <main 
        className={`relative z-10 w-full max-w-[400px] transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className="glass rounded-[45px] p-8 flex flex-col items-center">
          
          {/* Foto de Perfil Simplificada */}
          <div className="relative mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.5)] border-4 border-white/10">
              <img 
                src="https://github.com/paulocarlosfilho.png" 
                alt="Paulo Carlos" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Docker Badge */}
            <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-[#066da5] rounded-full border-2 border-white shadow-xl flex items-center justify-center overflow-hidden z-10">
              <i className="fa-brands fa-docker text-white text-xl"></i>
            </div>
            
            {/* AWS Cloud Practitioner Badge */}
            <div className="absolute -bottom-1 -left-1 w-10 h-10 bg-white rounded-full border-2 border-[#232F3E] shadow-xl flex items-center justify-center overflow-hidden z-10 p-1">
              <img 
                src="https://images.credly.com/size/340x340/images/0063d974-0b7d-4a6a-93eb-aded30980ef5/v2_architecting-on-aws.png" 
                alt="AWS Cloud Practitioner"
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback para ícone caso a imagem falhe
                  (e.target as HTMLImageElement).style.display = 'none';
                  const parent = (e.target as HTMLElement).parentElement;
                  if (parent) {
                    parent.innerHTML = '<i class="fa-brands fa-aws text-[#FF9900] text-xl"></i>';
                    parent.style.backgroundColor = '#232F3E';
                  }
                }}
              />
            </div>
          </div>

          {/* Identificação */}
          <div className="text-center mb-10 relative">
            <h1 className="text-3xl font-bold text-white mb-1 tracking-tight">Paulo Carlos</h1>
            <h2 className="text-[11px] gold-text font-bold uppercase tracking-[0.2em] mb-4">DevOps Engineer & Software Architecture</h2>
            <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
              Especialista em automação de infraestrutura e delivery de software. 
              Foco em <span className="text-blue-400">Docker</span>, <span className="text-blue-400">Terraform</span> e sistemas robustos com <span className="text-blue-400">Java</span> e <span className="text-blue-400">Python/FastAPI</span>.
            </p>
          </div>

          {/* Seção de Skills/Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 px-4">
            <SkillBadge icon="fa-react" label="React" color="text-cyan-400" />
            <SkillBadge icon="fa-js" label="TypeScript" color="text-blue-500" />
            <SkillBadge icon="fa-css3-alt" label="Tailwind CSS" color="text-teal-400" />
            <SkillBadge icon="fa-docker" label="Docker" color="text-blue-400" />
            <SkillBadge icon="fa-java" label="Java" color="text-red-500" />
            <SkillBadge icon="fa-aws" label="AWS" color="text-orange-400" />
          </div>

          {/* Lista de Contato Vertical */}
          <div className="flex flex-col gap-3 w-full mb-6">
            <ActionLink 
              href={`https://wa.me/${CONTACT_DATA.phone}`} 
              icon="fa-brands fa-whatsapp" 
              label="WhatsApp" 
              color="text-[#25D366]"
            />
            <ActionLink 
              href={`mailto:${CONTACT_DATA.email}`} 
              icon="fa-envelope" 
              label="E-mail" 
              color="text-red-400"
            />
            <ActionLink 
              href={CONTACT_DATA.portfolio} 
              icon="fa-code" 
              label="Portfolio" 
              color="text-[#D4AF37]"
            />
          </div>

          {/* Botão Salvar Contato */}
          <button 
            onClick={saveVCard}
            className="w-full gold-bg text-black font-extrabold py-4 rounded-2xl mb-10 flex items-center justify-center gap-3 transition-all active:scale-95 hover:brightness-110 shadow-[0_10px_20px_rgba(212,175,55,0.3)] uppercase tracking-widest text-xs"
          >
            <i className="fa-solid fa-user-plus text-lg"></i>
            Salvar na Agenda
          </button>

          {/* Projeto em Destaque: Carlos Rações */}
          <div className="w-full mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-8 gold-bg"></div>
              <h3 className="text-white text-[10px] font-bold uppercase tracking-[0.3em]">Projeto em Destaque</h3>
            </div>
            
            <a 
              href="https://github.com/paulocarlosfilho/petshop-simples"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white/10 rounded-[30px] overflow-hidden border border-white/20 group block transition-all hover:bg-white/15"
            >
              <div className="h-44 overflow-hidden relative">
                <img src={PROJECTS[0].image} alt={PROJECTS[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-5">
                  <h4 className="text-white font-bold text-lg">{PROJECTS[0].title}</h4>
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-300 text-xs mb-4 leading-relaxed font-light">
                  {PROJECTS[0].description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  <Tag text="Java" />
                  <Tag text="React" />
                  <Tag text="Docker" />
                </div>
              </div>
            </a>
          </div>

          {/* Redes Sociais */}
          <footer className="w-full flex flex-col items-center gap-5">
            <div className="flex gap-8">
              <SocialIcon href={CONTACT_DATA.linkedin} icon="fa-linkedin-in" />
              <SocialIcon href="https://github.com/paulocarlosfilho" icon="fa-github" />
            </div>
            <div className="text-center">
              <p className="text-white/40 text-[9px] uppercase tracking-[0.4em] mb-1">
                Security & Cloud Certified
              </p>
              <p className="text-white/20 text-[8px] font-light">
                © {new Date().getFullYear()} PAULO CARLOS • DEVOPS ENGINEER
              </p>
            </div>
          </footer>

        </div>
      </main>
    </div>
  );
};

// Componentes Auxiliares para Limpeza de Código
const Tag: React.FC<{ text: string }> = ({ text }) => (
  <span className="text-[9px] gold-text font-bold uppercase border border-[#D4AF37]/40 px-3 py-1.5 rounded-full bg-white/5">
    {text}
  </span>
);

const SocialIcon: React.FC<{ href: string; icon: string }> = ({ href, icon }) => (
  <a href={href} className="text-white/50 hover:text-[#D4AF37] transition-all transform hover:scale-125 text-xl">
    <i className={`fa-brands ${icon}`}></i>
  </a>
);

interface ActionLinkProps {
  href: string;
  icon: string;
  label: string;
  color: string;
}

const ActionLink: React.FC<ActionLinkProps> = ({ href, icon, label, color }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-white/5 border border-white/10 rounded-3xl p-4 flex items-center justify-between px-8 transition-all hover:bg-white/10 active:scale-95 group glow-on-hover"
    >
      <div className="flex items-center gap-4">
        <i className={`${icon} text-xl ${color} transition-transform group-hover:scale-110`}></i>
        <span className="text-[10px] text-white font-bold uppercase tracking-[0.2em]">{label}</span>
      </div>
      <i className="fa-solid fa-chevron-right text-[10px] text-white/20 group-hover:text-white/50 transition-colors"></i>
    </a>
  );
};

const SkillBadge: React.FC<{ icon: string; label: string; color: string }> = ({ icon, label, color }) => (
  <div className="tech-badge px-3 py-1.5 rounded-xl flex items-center gap-2">
    <i className={`fa-brands ${icon} ${color} text-xs`}></i>
    <span className="text-[9px] text-white/70 font-bold uppercase tracking-wider">{label}</span>
  </div>
);

export default App;
