
import { Project, ContactInfo } from './types';

export const CONTACT_DATA: ContactInfo = {
  name: "Paulo Carlos",
  title: "DevOps SRE | Python • React • Node",
  phone: "5581997010241",
  email: "paulocarlosfilho@gmail.com",
  location: "São Paulo, Brasil",
  portfolio: "https://github.com/paulocarlosfilho/manipulacao-de-dados-com-fastapi-assincrono",
  linkedin: "https://www.linkedin.com/in/paulocarlosfilho/",
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Carlos Rações Ecosystem",
    description: "Sistema completo de gestão para Petshops. Desenvolvido com React para uma interface fluida e Node.js no backend para alta escalabilidade.",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=600",
    tags: ["React", "Node.js", "Docker"]
  }
];
