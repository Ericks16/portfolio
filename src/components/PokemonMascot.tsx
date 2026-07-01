import { useEffect, useRef, useState } from "react";

/**
 * Enjambre de Pokémon: empieza con Pikachu y cada cierto tiempo aparece
 * otro. Cada uno vaga de forma ALEATORIA (sin patrón) por toda la página,
 * eligiendo destinos al azar, con pausas y saltitos. Siempre visible (fixed).
 */
const POOL = ["pikachu", "eevee", "charmander", "squirtle", "bulbasaur", "gengar", "greninja", "lucario", "mew"];
const GLOWS = ["#00f0ff", "#a855f7", "#ff006e", "#00ff9f", "#ffb300"];
const MAX = 7;
const SIZE = 58;

interface Motion { x: number; y: number; tx: number; ty: number; speed: number; pause: number; flip: number; phase: number; }

const rand = (a: number, b: number) => a + Math.random() * (b - a);
const yTop = 90;

export default function PokemonMascot() {
  const containerRef = useRef<HTMLDivElement>(null);
  const motion = useRef<Motion[]>([]);
  const [mobs, setMobs] = useState<{ src: string; glow: string }[]>([]);

  // Aparición progresiva
  useEffect(() => {
    const order = ["pikachu", ...POOL.filter((p) => p !== "pikachu").sort(() => Math.random() - 0.5)];
    let idx = 0;
    const spawn = () => {
      if (idx >= MAX || idx >= order.length) return;
      const W = window.innerWidth, H = window.innerHeight;
      motion.current.push({
        x: rand(0, W - SIZE), y: rand(yTop, H - 110),
        tx: rand(0, W - SIZE), ty: rand(yTop, H - 110),
        speed: rand(0.6, 1.7), pause: 0, flip: 1, phase: rand(0, Math.PI * 2),
      });
      setMobs((m) => [...m, { src: order[idx], glow: GLOWS[Math.floor(Math.random() * GLOWS.length)] }]);
      idx++;
    };
    spawn();
    const iv = setInterval(spawn, 12000);
    return () => clearInterval(iv);
  }, []);

  // Animación (un solo bucle rAF para todos)
  useEffect(() => {
    let raf = 0;
    const step = () => {
      const W = window.innerWidth, H = window.innerHeight;
      const kids = containerRef.current?.children;
      if (kids) {
        for (let i = 0; i < motion.current.length && i < kids.length; i++) {
          const m = motion.current[i];
          const el = kids[i] as HTMLElement;
          if (m.pause > 0) {
            m.pause--;
          } else {
            const dx = m.tx - m.x, dy = m.ty - m.y, d = Math.hypot(dx, dy);
            if (d < 3) {
              m.tx = rand(10, W - SIZE - 10);
              m.ty = rand(yTop, H - 110);
              if (Math.random() < 0.4) m.pause = rand(50, 180);
            } else {
              m.x += (dx / d) * m.speed;
              m.y += (dy / d) * m.speed;
              m.flip = dx < 0 ? -1 : 1;
            }
          }
          m.phase += 0.15;
          const hop = m.pause > 0 ? 0 : Math.abs(Math.sin(m.phase)) * 5;
          el.style.transform = `translate(${m.x}px, ${m.y - hop}px) scaleX(${m.flip})`;
        }
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={containerRef} className="poke-swarm" aria-hidden="true">
      {mobs.map((mob, i) => (
        <img
          key={i}
          src={`/${mob.src}.gif`}
          className="poke-mob"
          alt=""
          draggable={false}
          style={{ filter: `drop-shadow(0 0 8px ${mob.glow})` }}
        />
      ))}
    </div>
  );
}
