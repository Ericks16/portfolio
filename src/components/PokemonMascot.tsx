import { useEffect, useRef } from "react";

/**
 * Pikachu que camina automáticamente por todo el ancho de la página,
 * gira al llegar a los bordes, hace un pequeño salto al caminar y
 * a veces se detiene un momento. Siempre visible (fixed) al hacer scroll.
 */
export default function PokemonMascot() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;

    const SPRITE = 84;
    let x = 40;
    let dir = 1;          // 1 = derecha, -1 = izquierda
    const speed = 1.15;   // px por frame
    let t = 0;            // fase del salto
    let pause = 0;        // frames en pausa
    let raf = 0;

    const step = () => {
      const max = window.innerWidth - SPRITE - 8;

      if (pause > 0) {
        pause--;
      } else {
        x += speed * dir;
        if (x >= max) { x = max; dir = -1; if (Math.random() < 0.45) pause = 80; }
        if (x <= 8)   { x = 8;   dir = 1;  if (Math.random() < 0.45) pause = 80; }
      }

      t += 0.2;
      const hop = pause > 0 ? 0 : Math.abs(Math.sin(t)) * 7;

      wrap.style.transform = `translateX(${x}px)`;
      img.style.transform = `translateY(${-hop}px) scaleX(${dir})`;
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={wrapRef} className="poke-mascot" aria-hidden="true">
      <span className="shadow" />
      <img ref={imgRef} src="/pikachu.gif" alt="" draggable={false} />
    </div>
  );
}
