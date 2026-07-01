import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useInView, animate } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaMapMarkerAlt, FaGraduationCap } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import ParticleField from "./components/ParticleField";
import { services, techCategories } from "./data";

const EMAIL = "erick.erazo2003@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/erick-erazo-05826a29a/";
const GITHUB = "https://github.com/Ericks16";

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const allTech = techCategories.flatMap((c) => c.items);

/* ---------- Texto tipeado ---------- */
function Typed() {
  const roles = [
    "Frontend Engineer",
    "Web3 & Blockchain Dev",
    "AI & Automation Builder",
    "Cybersecurity Explorer",
  ];
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const full = roles[i];
    const speed = del ? 45 : 90;
    const t = setTimeout(() => {
      if (!del) {
        setTxt(full.slice(0, txt.length + 1));
        if (txt === full) setTimeout(() => setDel(true), 1100);
      } else {
        setTxt(full.slice(0, txt.length - 1));
        if (txt === "") {
          setDel(false);
          setI((p) => (p + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [txt, del, i]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span className="font-mono text-cyan">
      {txt}
      <span className="animate-pulse">_</span>
    </span>
  );
}

/* ---------- Contador animado ---------- */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ---------- Barra de progreso de scroll ---------- */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />;
}

/* ---------- Navbar ---------- */
function Navbar() {
  const links = [
    ["Inicio", "home"],
    ["Sobre mí", "about"],
    ["Servicios", "services"],
    ["Tech", "tech"],
    ["Contacto", "contact"],
  ];
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#050008cc] border-b border-purple/20">
      <nav className="container-x flex items-center justify-between py-4 px-6">
        <a href="#home" className="font-display font-black text-xl grad-text">{"<ERICK/>"}</a>
        <div className="hidden md:flex gap-7 font-mono text-sm">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="text-[#c8c2d4] hover:text-cyan transition-colors">{label}</a>
          ))}
        </div>
        <a href="#contact" className="btn-neon btn-primary !py-2 !px-4 text-xs">HABLEMOS</a>
      </nav>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-16">
      <motion.div
        className="avatar-wrap float mb-8"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <img src="/avatar.jpg" alt="Erick Erazo" />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
        <span className="chip mb-6"><HiSparkles className="text-cyan" /> Disponible para proyectos · Quito, Ecuador</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="font-display font-black text-5xl md:text-7xl my-6"
      >
        <span className="glitch neon-text" data-text="ERICK ERAZO">ERICK ERAZO</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="text-2xl md:text-3xl mb-5 h-10"
      >
        <Typed />
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="max-w-2xl text-lg md:text-xl text-[#a89fba] mb-9 leading-relaxed"
      >
        No solo escribo código — <span className="text-cyan font-semibold">construyo experiencias digitales que la gente recuerda</span>.
        Fusiono frontend de alto nivel, Web3, IA y ciberseguridad para convertir ideas ambiciosas en productos reales.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.65 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <a href="#services" className="btn-neon btn-primary">VER SERVICIOS <FaArrowRight /></a>
        <a href="#contact" className="btn-neon btn-ghost">CONTACTO</a>
      </motion.div>

      <div className="flex gap-5 mt-10 text-2xl">
        <a href={GITHUB} target="_blank" rel="noreferrer" className="text-[#9890a8] hover:text-cyan transition-colors"><FaGithub /></a>
        <a href={LINKEDIN} target="_blank" rel="noreferrer" className="text-[#9890a8] hover:text-cyan transition-colors"><FaLinkedin /></a>
        <a href={`mailto:${EMAIL}`} className="text-[#9890a8] hover:text-cyan transition-colors"><FaEnvelope /></a>
      </div>
    </section>
  );
}

/* ---------- Marquee de tecnologías ---------- */
function TechMarquee() {
  const row = [...allTech, ...allTech];
  return (
    <div className="marquee py-6 border-y border-purple/15 bg-[#0a001466]">
      <div className="marquee-track">
        {row.map((t, i) => (
          <t.Icon key={i} title={t.name} />
        ))}
      </div>
    </div>
  );
}

/* ---------- Stats ---------- */
function Stats() {
  const stats = [
    { to: 3, suffix: "+", label: "Años programando" },
    { to: 20, suffix: "+", label: "Proyectos construidos" },
    { to: 35, suffix: "+", label: "Tecnologías dominadas" },
    { to: 5, suffix: "", label: "Áreas de especialidad" },
  ];
  return (
    <section className="section-pad !py-16">
      <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass py-8 text-center"
          >
            <div className="font-display font-black text-4xl md:text-5xl grad-text">
              <Counter to={s.to} suffix={s.suffix} />
            </div>
            <p className="font-mono text-sm text-[#9890a8] mt-2">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Título de sección ---------- */
function SectionTitle({ tag, title }: { tag: string; title: string }) {
  return (
    <motion.div
      variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
      className="text-center mb-14"
    >
      <p className="font-mono text-cyan text-sm mb-2">{tag}</p>
      <h2 className="font-display font-black text-3xl md:text-5xl grad-text">{title}</h2>
    </motion.div>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-x">
        <SectionTitle tag="// quién soy" title="SOBRE MÍ" />
        <motion.div
          variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
          className="glass p-8 md:p-12 max-w-3xl mx-auto text-center"
        >
          <p className="text-xl leading-relaxed text-[#c8c2d4] mb-5">
            Soy <span className="text-cyan font-semibold">Erick Sebastián Erazo</span>, ingeniero de software en formación
            en la <span className="text-purple font-semibold">EPN</span> — la universidad #1 de Ecuador — y un obsesivo del detalle.
          </p>
          <p className="text-lg leading-relaxed text-[#a89fba] mb-8">
            Mientras otros eligen un solo camino, yo conecto mundos: interfaces que fluyen, smart contracts que no fallan,
            automatizaciones con IA y sistemas que resisten ataques. Aprendo rápido, entrego a tiempo y me apasiona
            transformar problemas complejos en productos que <span className="text-magenta font-semibold">vuelan cabezas</span>.
          </p>
          <div className="flex flex-wrap gap-3 justify-center font-mono text-sm">
            <span className="chip"><FaMapMarkerAlt className="text-magenta" /> Quito, Ecuador</span>
            <span className="chip"><FaGraduationCap className="text-cyan" /> EPN · 7mo semestre</span>
            <span className="chip">🌐 Español · English C1</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="container-x">
        <SectionTitle tag="// lo que ofrezco" title="SERVICIOS" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="glass p-7"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{ background: `${s.color}1a`, color: s.color, boxShadow: `0 0 20px ${s.color}33` }}
              >
                <s.Icon />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">{s.title}</h3>
              <p className="text-[#9890a8] leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Tech Stack ---------- */
function TechStack() {
  return (
    <section id="tech" className="section-pad">
      <div className="container-x">
        <SectionTitle tag="// mi arsenal" title="TECNOLOGÍAS" />
        <div className="space-y-10">
          {techCategories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: ci * 0.05 }}
            >
              <h3 className="font-mono mb-4 text-lg" style={{ color: cat.accent }}>{"> "}{cat.label}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((t) => (
                  <span key={t.name} className="chip" style={{ color: "#c8c2d4" }}>
                    <t.Icon style={{ color: cat.accent }} /> {t.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div className="container-x">
        <SectionTitle tag="// hablemos" title="CONTACTO" />
        <motion.div
          variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
          className="glass p-8 md:p-14 max-w-3xl mx-auto text-center"
        >
          <h3 className="font-display font-black text-2xl md:text-4xl text-white mb-4">
            ¿Tienes un proyecto en mente?
          </h3>
          <p className="text-[#9890a8] text-lg mb-9 max-w-xl mx-auto">
            Estoy disponible para freelance, prácticas y colaboraciones. Construyamos
            algo que vuele cabezas. 🚀
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={`mailto:${EMAIL}`} className="btn-neon btn-primary"><FaEnvelope /> ESCRÍBEME</a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="btn-neon btn-ghost"><FaLinkedin /> LINKEDIN</a>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="btn-neon btn-ghost"><FaGithub /> GITHUB</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- App ---------- */
export default function App() {
  return (
    <>
      <ScrollProgress />
      <div className="cyber-grid" />
      <ParticleField />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <Stats />
        <About />
        <Services />
        <TechStack />
        <Contact />
      </main>
      <footer className="border-t border-purple/20 py-8 text-center font-mono text-sm text-[#6b6378]">
        <p>Diseñado y construido por Erick Erazo · {new Date().getFullYear()}</p>
        <p className="mt-1 text-xs">React · TypeScript · Vite · Framer Motion · Tailwind</p>
      </footer>
    </>
  );
}
