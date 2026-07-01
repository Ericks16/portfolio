import { useEffect, useRef, useState, type FormEvent } from "react";
import { motion, useScroll, useInView, animate } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaMapMarkerAlt, FaGraduationCap, FaExternalLinkAlt, FaPaperPlane, FaDownload } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { TbLanguage } from "react-icons/tb";
import Background from "./components/Background";
import ParticleField from "./components/ParticleField";
import NeonDragon from "./components/NeonDragon";
import { services, techCategories, projects } from "./data";
import { Analytics } from "@vercel/analytics/react";
import { LangContext, useLang, useT, type Lang } from "./i18n";

const EMAIL = "erick.erazo2003@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/erick-erazo-05826a29a/";
const GITHUB = "https://github.com/Ericks16";

const reveal = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } };
const allTech = techCategories.flatMap((c) => c.items);

/* ---------- Texto tipeado (roles) ---------- */
function Typed() {
  const roles = ["Frontend Engineer", "Web3 & Blockchain Dev", "AI & Automation Builder", "Cybersecurity Explorer"];
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
        if (txt === "") { setDel(false); setI((p) => (p + 1) % roles.length); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [txt, del, i]); // eslint-disable-line react-hooks/exhaustive-deps
  return <span className="font-mono text-cyan">{txt}<span className="animate-pulse">_</span></span>;
}

/* ---------- Contador animado ---------- */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, { duration: 1.6, ease: "easeOut", onUpdate: (v) => setVal(Math.floor(v)) });
    return () => controls.stop();
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />;
}

/* ---------- Navbar + toggle idioma ---------- */
function Navbar() {
  const t = useT();
  const { lang, setLang } = useLang();
  const links: [string, string][] = [
    [t.nav.home, "home"], [t.nav.about, "about"], [t.nav.services, "services"],
    [t.nav.projects, "projects"], [t.nav.tech, "tech"], [t.nav.contact, "contact"],
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
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="chip !py-1.5 !px-3 text-xs cursor-pointer"
            title="Español / English"
          >
            <TbLanguage /> {lang === "es" ? "EN" : "ES"}
          </button>
          <a href="#contact" className="btn-neon btn-primary !py-2 !px-4 text-xs">{t.nav.cta}</a>
        </div>
      </nav>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const t = useT();
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-16">
      <motion.div className="avatar-wrap float mb-8" initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
        <img src="/avatar.jpg" alt="Erick Erazo" />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
        <span className="chip mb-6"><HiSparkles className="text-cyan" /> {t.hero.chip}</span>
      </motion.div>

      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="font-display font-black text-5xl md:text-7xl my-6">
        <span className="glitch neon-text" data-text="ERICK ERAZO">ERICK ERAZO</span>
      </motion.h1>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.35 }} className="text-2xl md:text-3xl mb-5 h-10">
        <Typed />
      </motion.p>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.5 }} className="max-w-2xl text-lg md:text-xl text-[#a89fba] mb-9 leading-relaxed">
        {t.hero.t1}<span className="text-cyan font-semibold">{t.hero.hi}</span>{t.hero.t2}
      </motion.p>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.65 }} className="flex flex-wrap gap-4 justify-center">
        <a href="#services" className="btn-neon btn-primary">{t.hero.viewServices} <FaArrowRight /></a>
        <a href="/CV_Erick_Erazo.pdf" download className="btn-neon btn-ghost"><FaDownload /> {t.hero.cv}</a>
        <a href="#contact" className="btn-neon btn-ghost">{t.hero.contact}</a>
      </motion.div>

      <div className="flex gap-5 mt-10 text-2xl">
        <a href={GITHUB} target="_blank" rel="noreferrer" className="text-[#9890a8] hover:text-cyan transition-colors"><FaGithub /></a>
        <a href={LINKEDIN} target="_blank" rel="noreferrer" className="text-[#9890a8] hover:text-cyan transition-colors"><FaLinkedin /></a>
        <a href={`mailto:${EMAIL}`} className="text-[#9890a8] hover:text-cyan transition-colors"><FaEnvelope /></a>
      </div>
    </section>
  );
}

function TechMarquee() {
  const row = [...allTech, ...allTech];
  return (
    <div className="marquee py-6 border-y border-purple/15 bg-[#0a001466]">
      <div className="marquee-track">
        {row.map((tech, i) => (<tech.Icon key={i} title={tech.name} />))}
      </div>
    </div>
  );
}

function Stats() {
  const t = useT();
  const nums = [{ to: 3, s: "+" }, { to: 20, s: "+" }, { to: 35, s: "+" }, { to: 5, s: "" }];
  return (
    <section className="section-pad !py-16">
      <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-6">
        {nums.map((n, i) => (
          <motion.div key={i} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="glass py-8 text-center">
            <div className="font-display font-black text-4xl md:text-5xl grad-text"><Counter to={n.to} suffix={n.s} /></div>
            <p className="font-mono text-sm text-[#9890a8] mt-2">{t.stats[i]}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function SectionTitle({ tag, title }: { tag: string; title: string }) {
  return (
    <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="text-center mb-14">
      <p className="font-mono text-cyan text-sm mb-2">{tag}</p>
      <h2 className="font-display font-black text-3xl md:text-5xl grad-text">{title}</h2>
    </motion.div>
  );
}

function About() {
  const t = useT();
  return (
    <section id="about" className="section-pad">
      <div className="container-x">
        <SectionTitle tag={t.about.tag} title={t.about.title} />
        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="glass p-8 md:p-12 max-w-3xl mx-auto text-center">
          <p className="text-xl leading-relaxed text-[#c8c2d4] mb-5">
            {t.about.p1a}<span className="text-cyan font-semibold">{t.about.name}</span>{t.about.p1b}<span className="text-purple font-semibold">{t.about.epn}</span>{t.about.p1c}
          </p>
          <p className="text-lg leading-relaxed text-[#a89fba] mb-8">
            {t.about.p2a}<span className="text-magenta font-semibold">{t.about.p2hi}</span>{t.about.p2c}
          </p>
          <div className="flex flex-wrap gap-3 justify-center font-mono text-sm">
            <span className="chip"><FaMapMarkerAlt className="text-magenta" /> Quito, Ecuador</span>
            <span className="chip"><FaGraduationCap className="text-cyan" /> {t.about.chipEpn}</span>
            <span className="chip">🌐 {t.about.chipLang}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  const t = useT();
  const { lang } = useLang();
  return (
    <section id="services" className="section-pad">
      <div className="container-x">
        <SectionTitle tag={t.services.tag} title={t.services.title} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <motion.div key={s.title.es} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }} className="glass p-7">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5" style={{ background: `${s.color}1a`, color: s.color, boxShadow: `0 0 20px ${s.color}33` }}>
                <s.Icon />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">{s.title[lang]}</h3>
              <p className="text-[#9890a8] leading-relaxed">{s.desc[lang]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const t = useT();
  const { lang } = useLang();
  return (
    <section id="projects" className="section-pad">
      <div className="container-x">
        <SectionTitle tag={t.projects.tag} title={t.projects.title} />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, idx) => (
            <motion.div key={p.title.es} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }} className="glass p-7 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl" style={{ background: `${p.color}1a`, color: p.color, boxShadow: `0 0 18px ${p.color}33` }}>
                  <p.Icon />
                </div>
                {p.soon && (<span className="chip !py-1 !px-3 text-xs" style={{ color: p.color, borderColor: `${p.color}66` }}>{t.projects.soon}</span>)}
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">{p.title[lang]}</h3>
              <p className="text-[#9890a8] leading-relaxed mb-5 flex-1">{p.desc[lang]}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map((tag) => (<span key={tag} className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#a855f71a] text-[#c8b6ff]">{tag}</span>))}
              </div>
              {!p.soon && (
                <div className="flex gap-3">
                  {p.github && (<a href={p.github} target="_blank" rel="noreferrer" className="btn-neon btn-ghost !py-2 !px-4 text-xs"><FaGithub /> {t.projects.code}</a>)}
                  {p.demo && (<a href={p.demo} target="_blank" rel="noreferrer" className="btn-neon btn-primary !py-2 !px-4 text-xs"><FaExternalLinkAlt /> {t.projects.demo}</a>)}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechStack() {
  const t = useT();
  const { lang } = useLang();
  return (
    <section id="tech" className="section-pad">
      <div className="container-x">
        <SectionTitle tag={t.tech.tag} title={t.tech.title} />
        <div className="space-y-10">
          {techCategories.map((cat, ci) => (
            <motion.div key={cat.label.es} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: ci * 0.05 }}>
              <h3 className="font-mono mb-4 text-lg" style={{ color: cat.accent }}>{"> "}{cat.label[lang]}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((tech) => (
                  <span key={tech.name} className="chip" style={{ color: "#c8c2d4" }}>
                    <tech.Icon style={{ color: cat.accent }} /> {tech.name}
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

function ContactForm() {
  const t = useT();
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "fallback">("idle");
  const [mailto, setMailto] = useState("");

  const buildMailto = (fd: FormData) => {
    const name = String(fd.get("name") || "");
    const email = String(fd.get("email") || "");
    const message = String(fd.get("message") || "");
    const subject = encodeURIComponent(`Contacto desde el portafolio — ${name}`);
    const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\n${message}`);
    return `mailto:erick.erazo2003@gmail.com?subject=${subject}&body=${body}`;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const mt = buildMailto(fd);
    fd.append("_subject", "Nuevo mensaje desde el portafolio");
    fd.append("_captcha", "false");
    fd.append("_template", "table");
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/erick.erazo2003@gmail.com", {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });
      const data = await res.json();
      if (String(data.success) === "true") { setStatus("ok"); form.reset(); }
      else { setMailto(mt); setStatus("fallback"); }
    } catch {
      setMailto(mt);
      setStatus("fallback");
    }
  };

  return (
    <form onSubmit={onSubmit} className="text-left space-y-4">
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />
      <div>
        <label className="field-label">{t.contact.nameLabel}</label>
        <input name="name" required placeholder={t.contact.namePh} className="cyber-input" />
      </div>
      <div>
        <label className="field-label">{t.contact.emailLabel}</label>
        <input type="email" name="email" required placeholder={t.contact.emailPh} className="cyber-input" />
      </div>
      <div>
        <label className="field-label">{t.contact.msgLabel}</label>
        <textarea name="message" required placeholder={t.contact.msgPh} className="cyber-input" rows={4} />
      </div>
      <button type="submit" disabled={status === "sending"} className="btn-neon btn-primary w-full justify-center">
        {status === "sending" ? t.contact.sending : t.contact.send} <FaPaperPlane />
      </button>
      {status === "ok" && <p className="text-cyan font-mono text-sm text-center pt-1">{t.contact.ok}</p>}
      {status === "fallback" && (
        <div className="text-center pt-2">
          <p className="font-mono text-sm mb-3" style={{ color: "#ffb300" }}>{t.contact.fallback}</p>
          <a href={mailto} className="btn-neon btn-primary justify-center inline-flex"><FaEnvelope /> {t.contact.fallbackBtn}</a>
        </div>
      )}
    </form>
  );
}

function Contact() {
  const t = useT();
  return (
    <section id="contact" className="section-pad">
      <div className="container-x">
        <SectionTitle tag={t.contact.tag} title={t.contact.title} />
        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="glass p-8 md:p-12 max-w-2xl mx-auto">
          <h3 className="font-display font-black text-2xl md:text-4xl text-white mb-3 text-center">{t.contact.heading}</h3>
          <p className="text-[#9890a8] text-lg mb-8 text-center">{t.contact.body}</p>
          <ContactForm />
          <div className="flex items-center gap-3 my-7 text-[#6b6378] font-mono text-xs uppercase">
            <span className="flex-1 h-px bg-purple/20" />{t.contact.or}<span className="flex-1 h-px bg-purple/20" />
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="btn-neon btn-ghost !py-2 !px-4 text-xs"><FaLinkedin /> LINKEDIN</a>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="btn-neon btn-ghost !py-2 !px-4 text-xs"><FaGithub /> GITHUB</a>
            <a href={`mailto:${EMAIL}`} className="btn-neon btn-ghost !py-2 !px-4 text-xs"><FaEnvelope /> EMAIL</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button className="back-top" aria-label="Volver arriba" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      ↑
    </button>
  );
}

function Site() {
  const t = useT();
  return (
    <>
      <ScrollProgress />
      <Background />
      <ParticleField />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <Stats />
        <About />
        <Services />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <NeonDragon />
      <BackToTop />
      <footer className="border-t border-purple/20 py-8 text-center font-mono text-sm text-[#6b6378]">
        <p>{t.footer} · {new Date().getFullYear()}</p>
        <p className="mt-1 text-xs">React · TypeScript · Vite · Framer Motion · Tailwind</p>
      </footer>
      <Analytics />
    </>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>("es");
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Site />
    </LangContext.Provider>
  );
}
