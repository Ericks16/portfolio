import { createContext, useContext } from "react";

export type Lang = "es" | "en";

export interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
}

export const LangContext = createContext<LangCtx>({ lang: "es", setLang: () => {} });
export const useLang = () => useContext(LangContext);
export const useT = () => strings[useContext(LangContext).lang];

export const strings = {
  es: {
    nav: { home: "Inicio", about: "Sobre mí", services: "Servicios", projects: "Proyectos", tech: "Tech", contact: "Contacto", cta: "HABLEMOS" },
    hero: {
      chip: "Disponible para proyectos · Quito, Ecuador",
      t1: "No solo escribo código — ",
      hi: "construyo experiencias digitales que la gente recuerda",
      t2: ". Fusiono frontend de alto nivel, Web3, IA y ciberseguridad para convertir ideas ambiciosas en productos reales.",
      viewServices: "VER SERVICIOS",
      contact: "CONTACTO",
    },
    stats: ["Años programando", "Proyectos construidos", "Tecnologías dominadas", "Áreas de especialidad"],
    about: {
      tag: "// quién soy", title: "SOBRE MÍ",
      p1a: "Soy ", name: "Erick Sebastián Erazo", p1b: ", ingeniero de software en formación en la ", epn: "EPN", p1c: " — la universidad #1 de Ecuador — y un obsesivo del detalle.",
      p2a: "Mientras otros eligen un solo camino, yo conecto mundos: interfaces que fluyen, smart contracts que no fallan, automatizaciones con IA y sistemas que resisten ataques. Aprendo rápido, entrego a tiempo y me apasiona transformar problemas complejos en productos que ",
      p2hi: "vuelan cabezas", p2c: ".",
      chipEpn: "EPN · 7mo semestre", chipLang: "Español · English C1",
    },
    services: { tag: "// lo que ofrezco", title: "SERVICIOS" },
    projects: { tag: "// mi trabajo", title: "PROYECTOS", soon: "Próximamente", code: "CÓDIGO", demo: "DEMO" },
    tech: { tag: "// mi arsenal", title: "TECNOLOGÍAS" },
    contact: {
      tag: "// hablemos", title: "CONTACTO",
      heading: "¿Tienes un proyecto en mente?",
      body: "Estoy disponible para freelance, prácticas y colaboraciones. Construyamos algo que vuele cabezas. 🚀",
      nameLabel: "Nombre", namePh: "Tu nombre",
      emailLabel: "Email", emailPh: "tu@correo.com",
      msgLabel: "Mensaje", msgPh: "Cuéntame sobre tu proyecto...",
      send: "ENVIAR MENSAJE", sending: "ENVIANDO...",
      ok: "¡Mensaje enviado! Te responderé pronto 🚀",
      err: "Algo falló. Escríbeme directo a mi correo.",
      or: "o encuéntrame en",
    },
    footer: "Diseñado y construido por Erick Erazo",
  },
  en: {
    nav: { home: "Home", about: "About", services: "Services", projects: "Projects", tech: "Tech", contact: "Contact", cta: "LET'S TALK" },
    hero: {
      chip: "Available for projects · Quito, Ecuador",
      t1: "I don't just write code — ",
      hi: "I build digital experiences people remember",
      t2: ". I blend high-end frontend, Web3, AI and cybersecurity to turn ambitious ideas into real products.",
      viewServices: "VIEW SERVICES",
      contact: "CONTACT",
    },
    stats: ["Years coding", "Projects built", "Technologies mastered", "Areas of expertise"],
    about: {
      tag: "// who i am", title: "ABOUT ME",
      p1a: "I'm ", name: "Erick Sebastián Erazo", p1b: ", a software engineering student at ", epn: "EPN", p1c: " — Ecuador's #1 university — and a detail obsessive.",
      p2a: "While others pick a single path, I connect worlds: interfaces that flow, smart contracts that don't fail, AI automations and systems that resist attacks. I learn fast, deliver on time and love turning complex problems into products that ",
      p2hi: "blow minds", p2c: ".",
      chipEpn: "EPN · 7th semester", chipLang: "Spanish · English C1",
    },
    services: { tag: "// what i offer", title: "SERVICES" },
    projects: { tag: "// my work", title: "PROJECTS", soon: "Coming soon", code: "CODE", demo: "DEMO" },
    tech: { tag: "// my arsenal", title: "TECHNOLOGIES" },
    contact: {
      tag: "// let's talk", title: "CONTACT",
      heading: "Got a project in mind?",
      body: "I'm available for freelance, internships and collaborations. Let's build something that blows minds. 🚀",
      nameLabel: "Name", namePh: "Your name",
      emailLabel: "Email", emailPh: "you@email.com",
      msgLabel: "Message", msgPh: "Tell me about your project...",
      send: "SEND MESSAGE", sending: "SENDING...",
      ok: "Message sent! I'll reply soon 🚀",
      err: "Something failed. Email me directly.",
      or: "or find me at",
    },
    footer: "Designed & built by Erick Erazo",
  },
} as const;
