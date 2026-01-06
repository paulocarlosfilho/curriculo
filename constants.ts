
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
    title: "Banco Moderno API",
    description: "Sistema bancário de alto nível com FastAPI, 100% Assíncrono, autenticação JWT e arquitetura modular. Foco em performance e segurança.",
    image: "project-banco.png",
    tags: ["FastAPI", "Python", "Docker", "SQLAlchemy"]
  }
];
