import type { IconType } from "react-icons";
import { FaCode, FaCube, FaRobot, FaShieldAlt, FaPaintBrush, FaServer, FaGithub } from "react-icons/fa";
import {
  SiReact, SiAngular, SiTypescript, SiJavascript, SiHtml5, SiCss, SiTailwindcss, SiSass, SiBootstrap, SiVite,
  SiSolidity, SiEthereum, SiWeb3Dotjs, SiChainlink, SiIpfs, SiPolygon,
  SiPython, SiTensorflow, SiPytorch, SiAnthropic, SiLangchain, SiHuggingface, SiN8N,
  SiKalilinux, SiLinux, SiGnubash, SiWireshark, SiBurpsuite, SiMetasploit, SiOwasp,
  SiMysql, SiPostgresql, SiMongodb, SiFirebase, SiRedis, SiDocker, SiNodedotjs, SiGit, SiFigma, SiPostman, SiVercel,
} from "react-icons/si";

export interface Service {
  title: string;
  desc: string;
  Icon: IconType;
  color: string;
}

export const services: Service[] = [
  {
    title: "Desarrollo Frontend",
    desc: "Interfaces web modernas, responsivas y ultra-rápidas con React, Angular y TypeScript. SPAs, PWAs y design systems escalables.",
    Icon: FaCode,
    color: "#00f0ff",
  },
  {
    title: "Web3 & Blockchain",
    desc: "Smart contracts en Solidity, dApps, integración de wallets (MetaMask) y despliegue en Ethereum y Polygon.",
    Icon: FaCube,
    color: "#a855f7",
  },
  {
    title: "IA & Automatización",
    desc: "Integración de LLMs (Anthropic, OpenAI), chatbots inteligentes y automatización de flujos con n8n y LangChain.",
    Icon: FaRobot,
    color: "#ff006e",
  },
  {
    title: "Ciberseguridad",
    desc: "Auditoría web y pentesting guiado por OWASP Top 10, con análisis usando Burp Suite, Wireshark y Metasploit.",
    Icon: FaShieldAlt,
    color: "#00ff9f",
  },
  {
    title: "UI / UX Design",
    desc: "Diseño de interfaces atractivas y centradas en el usuario: prototipos en Figma, microinteracciones y branding.",
    Icon: FaPaintBrush,
    color: "#ffb300",
  },
  {
    title: "Backend & APIs",
    desc: "APIs REST con Node.js, bases de datos SQL/NoSQL y arquitecturas limpias, seguras y escalables.",
    Icon: FaServer,
    color: "#38bdf8",
  },
];

export interface Project {
  title: string;
  desc: string;
  tags: string[];
  Icon: IconType;
  color: string;
  github?: string;
  demo?: string;
  soon?: boolean;
}

export const projects: Project[] = [
  {
    title: "Perfil GitHub Animado",
    desc: "Mi README de perfil estilo cyberpunk: animaciones SVG propias, mascota pixel, y una serpiente + Pac-Man que recorren mi mapa de contribuciones (GitHub Actions).",
    tags: ["SVG", "GitHub Actions", "Automatización"],
    Icon: FaGithub,
    color: "#00f0ff",
    github: "https://github.com/Ericks16",
  },
  {
    title: "Portafolio Cyberpunk",
    desc: "Este mismo sitio: SPA con fondo de partículas interactivo, animaciones fluidas y mascota Pokémon. Construido y desplegado desde cero.",
    tags: ["React", "TypeScript", "Framer Motion", "Vite"],
    Icon: FaCode,
    color: "#a855f7",
    github: "https://github.com/Ericks16/portfolio",
  },
  {
    title: "dApp Web3",
    desc: "Aplicación descentralizada con smart contracts en Solidity, conexión de wallets y despliegue en testnet. En construcción.",
    tags: ["Solidity", "Ethers.js", "Hardhat"],
    Icon: FaCube,
    color: "#ff006e",
    soon: true,
  },
  {
    title: "Automatización con IA",
    desc: "Agente que integra LLMs (Anthropic) con flujos de n8n y LangChain para automatizar tareas reales. En construcción.",
    tags: ["Python", "LangChain", "n8n"],
    Icon: FaRobot,
    color: "#00ff9f",
    soon: true,
  },
];

export interface Tech {
  name: string;
  Icon: IconType;
}

export interface TechCategory {
  label: string;
  accent: string;
  items: Tech[];
}

export const techCategories: TechCategory[] = [
  {
    label: "Frontend",
    accent: "#00f0ff",
    items: [
      { name: "React", Icon: SiReact }, { name: "Angular", Icon: SiAngular }, { name: "TypeScript", Icon: SiTypescript },
      { name: "JavaScript", Icon: SiJavascript }, { name: "HTML5", Icon: SiHtml5 }, { name: "CSS3", Icon: SiCss },
      { name: "Tailwind", Icon: SiTailwindcss }, { name: "Sass", Icon: SiSass }, { name: "Bootstrap", Icon: SiBootstrap }, { name: "Vite", Icon: SiVite },
    ],
  },
  {
    label: "Web3 & Blockchain",
    accent: "#a855f7",
    items: [
      { name: "Solidity", Icon: SiSolidity }, { name: "Ethereum", Icon: SiEthereum }, { name: "Web3.js", Icon: SiWeb3Dotjs },
      { name: "Chainlink", Icon: SiChainlink }, { name: "IPFS", Icon: SiIpfs }, { name: "Polygon", Icon: SiPolygon },
    ],
  },
  {
    label: "IA & Automatización",
    accent: "#ff006e",
    items: [
      { name: "Python", Icon: SiPython }, { name: "TensorFlow", Icon: SiTensorflow }, { name: "PyTorch", Icon: SiPytorch },
      { name: "Anthropic", Icon: SiAnthropic }, { name: "LangChain", Icon: SiLangchain }, { name: "Hugging Face", Icon: SiHuggingface }, { name: "n8n", Icon: SiN8N },
    ],
  },
  {
    label: "Ciberseguridad",
    accent: "#00ff9f",
    items: [
      { name: "Kali Linux", Icon: SiKalilinux }, { name: "Linux", Icon: SiLinux }, { name: "Bash", Icon: SiGnubash },
      { name: "Wireshark", Icon: SiWireshark }, { name: "Burp Suite", Icon: SiBurpsuite }, { name: "Metasploit", Icon: SiMetasploit }, { name: "OWASP", Icon: SiOwasp },
    ],
  },
  {
    label: "Databases & DevOps",
    accent: "#ffb300",
    items: [
      { name: "MySQL", Icon: SiMysql }, { name: "PostgreSQL", Icon: SiPostgresql }, { name: "MongoDB", Icon: SiMongodb },
      { name: "Firebase", Icon: SiFirebase }, { name: "Redis", Icon: SiRedis }, { name: "Docker", Icon: SiDocker },
      { name: "Node.js", Icon: SiNodedotjs }, { name: "Git", Icon: SiGit }, { name: "Figma", Icon: SiFigma }, { name: "Postman", Icon: SiPostman }, { name: "Vercel", Icon: SiVercel },
    ],
  },
];
