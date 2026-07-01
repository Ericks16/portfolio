import type { IconType } from "react-icons";
import { FaCode, FaCube, FaRobot, FaShieldAlt, FaPaintBrush, FaServer, FaGithub, FaLeaf } from "react-icons/fa";
import {
  SiReact, SiAngular, SiTypescript, SiJavascript, SiHtml5, SiCss, SiTailwindcss, SiSass, SiBootstrap, SiVite,
  SiSolidity, SiEthereum, SiWeb3Dotjs, SiChainlink, SiIpfs, SiPolygon,
  SiPython, SiTensorflow, SiPytorch, SiAnthropic, SiLangchain, SiHuggingface, SiN8N,
  SiKalilinux, SiLinux, SiGnubash, SiWireshark, SiBurpsuite, SiMetasploit, SiOwasp,
  SiMysql, SiPostgresql, SiMongodb, SiFirebase, SiRedis, SiDocker, SiNodedotjs, SiGit, SiFigma, SiPostman, SiVercel,
} from "react-icons/si";

export type L = { es: string; en: string };

export interface Service {
  title: L;
  desc: L;
  Icon: IconType;
  color: string;
}

export const services: Service[] = [
  {
    title: { es: "Desarrollo Frontend", en: "Frontend Development" },
    desc: {
      es: "Interfaces web modernas, responsivas y ultra-rápidas con React, Angular y TypeScript. SPAs, PWAs y design systems escalables.",
      en: "Modern, responsive and ultra-fast web interfaces with React, Angular and TypeScript. SPAs, PWAs and scalable design systems.",
    },
    Icon: FaCode, color: "#00f0ff",
  },
  {
    title: { es: "Web3 & Blockchain", en: "Web3 & Blockchain" },
    desc: {
      es: "Smart contracts en Solidity, dApps, integración de wallets (MetaMask) y despliegue en Ethereum y Polygon.",
      en: "Solidity smart contracts, dApps, wallet integration (MetaMask) and deployment on Ethereum and Polygon.",
    },
    Icon: FaCube, color: "#a855f7",
  },
  {
    title: { es: "IA & Automatización", en: "AI & Automation" },
    desc: {
      es: "Integración de LLMs (Anthropic, OpenAI), chatbots inteligentes y automatización de flujos con n8n y LangChain.",
      en: "LLM integration (Anthropic, OpenAI), intelligent chatbots and workflow automation with n8n and LangChain.",
    },
    Icon: FaRobot, color: "#ff006e",
  },
  {
    title: { es: "Ciberseguridad", en: "Cybersecurity" },
    desc: {
      es: "Auditoría web y pentesting guiado por OWASP Top 10, con análisis usando Burp Suite, Wireshark y Metasploit.",
      en: "Web auditing and pentesting guided by the OWASP Top 10, with analysis using Burp Suite, Wireshark and Metasploit.",
    },
    Icon: FaShieldAlt, color: "#00ff9f",
  },
  {
    title: { es: "UI / UX Design", en: "UI / UX Design" },
    desc: {
      es: "Diseño de interfaces atractivas y centradas en el usuario: prototipos en Figma, microinteracciones y branding.",
      en: "Attractive, user-centered interface design: Figma prototypes, microinteractions and branding.",
    },
    Icon: FaPaintBrush, color: "#ffb300",
  },
  {
    title: { es: "Backend & APIs", en: "Backend & APIs" },
    desc: {
      es: "APIs REST con Node.js, bases de datos SQL/NoSQL y arquitecturas limpias, seguras y escalables.",
      en: "REST APIs with Node.js, SQL/NoSQL databases and clean, secure and scalable architectures.",
    },
    Icon: FaServer, color: "#38bdf8",
  },
];

export interface Project {
  title: L;
  desc: L;
  tags: string[];
  Icon: IconType;
  color: string;
  github?: string;
  demo?: string;
  soon?: boolean;
}

export const projects: Project[] = [
  {
    title: { es: "Primus Agro AI", en: "Primus Agro AI" },
    desc: {
      es: "Agente de IA que detecta y diagnostica enfermedades en plantas del Ecuador a partir de imágenes, apoyando a agricultores con recomendaciones. Modelo entrenado con Python y desplegado en la web.",
      en: "AI agent that detects and diagnoses plant diseases in Ecuador from images, helping farmers with recommendations. Model trained in Python and deployed to the web.",
    },
    tags: ["Python", "TypeScript", "AI/ML", "PostgreSQL", "Docker"],
    Icon: FaLeaf, color: "#00ff9f",
    github: "https://github.com/Ericks16/primus-agro-ai",
    demo: "https://primus-agro-ai.vercel.app",
  },
  {
    title: { es: "Perfil GitHub Animado", en: "Animated GitHub Profile" },
    desc: {
      es: "Mi README de perfil estilo cyberpunk: animaciones SVG propias, mascota pixel, y una serpiente + Pac-Man que recorren mi mapa de contribuciones (GitHub Actions).",
      en: "My cyberpunk-style profile README: custom SVG animations, a pixel mascot, and a snake + Pac-Man that traverse my contribution map (GitHub Actions).",
    },
    tags: ["SVG", "GitHub Actions", "Automation"],
    Icon: FaGithub, color: "#00f0ff", github: "https://github.com/Ericks16",
  },
  {
    title: { es: "Portafolio Cyberpunk", en: "Cyberpunk Portfolio" },
    desc: {
      es: "Este mismo sitio: SPA con fondo de partículas interactivo, animaciones fluidas y mascota Pokémon. Construido y desplegado desde cero.",
      en: "This very site: an SPA with an interactive particle background, fluid animations and a Pokémon mascot. Built and deployed from scratch.",
    },
    tags: ["React", "TypeScript", "Framer Motion", "Vite"],
    Icon: FaCode, color: "#a855f7", github: "https://github.com/Ericks16/portfolio",
  },
  {
    title: { es: "dApp Web3", en: "Web3 dApp" },
    desc: {
      es: "Aplicación descentralizada con smart contracts en Solidity, conexión de wallets y despliegue en testnet. En construcción.",
      en: "Decentralized app with Solidity smart contracts, wallet connection and testnet deployment. In progress.",
    },
    tags: ["Solidity", "Ethers.js", "Hardhat"],
    Icon: FaCube, color: "#ff006e", soon: true,
  },
  {
    title: { es: "Automatización con IA", en: "AI Automation" },
    desc: {
      es: "Agente que integra LLMs (Anthropic) con flujos de n8n y LangChain para automatizar tareas reales. En construcción.",
      en: "Agent integrating LLMs (Anthropic) with n8n and LangChain workflows to automate real tasks. In progress.",
    },
    tags: ["Python", "LangChain", "n8n"],
    Icon: FaRobot, color: "#00ff9f", soon: true,
  },
];

export interface Tech {
  name: string;
  Icon: IconType;
}

export interface TechCategory {
  label: L;
  accent: string;
  items: Tech[];
}

export const techCategories: TechCategory[] = [
  {
    label: { es: "Frontend", en: "Frontend" },
    accent: "#00f0ff",
    items: [
      { name: "React", Icon: SiReact }, { name: "Angular", Icon: SiAngular }, { name: "TypeScript", Icon: SiTypescript },
      { name: "JavaScript", Icon: SiJavascript }, { name: "HTML5", Icon: SiHtml5 }, { name: "CSS3", Icon: SiCss },
      { name: "Tailwind", Icon: SiTailwindcss }, { name: "Sass", Icon: SiSass }, { name: "Bootstrap", Icon: SiBootstrap }, { name: "Vite", Icon: SiVite },
    ],
  },
  {
    label: { es: "Web3 & Blockchain", en: "Web3 & Blockchain" },
    accent: "#a855f7",
    items: [
      { name: "Solidity", Icon: SiSolidity }, { name: "Ethereum", Icon: SiEthereum }, { name: "Web3.js", Icon: SiWeb3Dotjs },
      { name: "Chainlink", Icon: SiChainlink }, { name: "IPFS", Icon: SiIpfs }, { name: "Polygon", Icon: SiPolygon },
    ],
  },
  {
    label: { es: "IA & Automatización", en: "AI & Automation" },
    accent: "#ff006e",
    items: [
      { name: "Python", Icon: SiPython }, { name: "TensorFlow", Icon: SiTensorflow }, { name: "PyTorch", Icon: SiPytorch },
      { name: "Anthropic", Icon: SiAnthropic }, { name: "LangChain", Icon: SiLangchain }, { name: "Hugging Face", Icon: SiHuggingface }, { name: "n8n", Icon: SiN8N },
    ],
  },
  {
    label: { es: "Ciberseguridad", en: "Cybersecurity" },
    accent: "#00ff9f",
    items: [
      { name: "Kali Linux", Icon: SiKalilinux }, { name: "Linux", Icon: SiLinux }, { name: "Bash", Icon: SiGnubash },
      { name: "Wireshark", Icon: SiWireshark }, { name: "Burp Suite", Icon: SiBurpsuite }, { name: "Metasploit", Icon: SiMetasploit }, { name: "OWASP", Icon: SiOwasp },
    ],
  },
  {
    label: { es: "Databases & DevOps", en: "Databases & DevOps" },
    accent: "#ffb300",
    items: [
      { name: "MySQL", Icon: SiMysql }, { name: "PostgreSQL", Icon: SiPostgresql }, { name: "MongoDB", Icon: SiMongodb },
      { name: "Firebase", Icon: SiFirebase }, { name: "Redis", Icon: SiRedis }, { name: "Docker", Icon: SiDocker },
      { name: "Node.js", Icon: SiNodedotjs }, { name: "Git", Icon: SiGit }, { name: "Figma", Icon: SiFigma }, { name: "Postman", Icon: SiPostman }, { name: "Vercel", Icon: SiVercel },
    ],
  },
];
