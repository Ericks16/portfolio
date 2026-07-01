import { useEffect, useRef } from "react";

/**
 * Dragón/serpiente de neón PROCEDURAL (canvas). Cuerpo segmentado que se
 * ondula solo (cadena de segmentos que se siguen), púas en el lomo, cuernos,
 * ojos brillantes y glow neón. Sigue el cursor y, si no hay movimiento, vaga
 * de forma autónoma por toda la página. No es un sprite: está generado con código.
 */
export default function NeonDragon() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = window.innerWidth, h = window.innerHeight;
    const resize = () => {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + "px"; canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const N = 42;
    const spacing = 12;
    const segs = Array.from({ length: N }, () => ({ x: w / 2, y: h / 2 }));

    const target = { x: w / 2, y: h / 2 };
    const mouse = { x: w / 2, y: h / 2, last: -9999 };
    const wander = { x: w / 2, y: h / 2 };
    let nextWander = 0;
    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; mouse.last = performance.now(); };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", resize);

    let raf = 0;
    const step = (now: number) => {
      // objetivo: cursor si se movió hace poco, si no, deambular
      if (now - mouse.last < 1600) {
        target.x += (mouse.x - target.x) * 0.09;
        target.y += (mouse.y - target.y) * 0.09;
      } else {
        if (now > nextWander) {
          wander.x = rand(w * 0.1, w * 0.9);
          wander.y = rand(h * 0.14, h * 0.86);
          nextWander = now + rand(1500, 3200);
        }
        target.x += (wander.x - target.x) * 0.02;
        target.y += (wander.y - target.y) * 0.02;
      }

      // cabeza hacia el objetivo
      const head = segs[0];
      const dx = target.x - head.x, dy = target.y - head.y;
      const dist = Math.hypot(dx, dy) || 1;
      const speed = Math.min(dist * 0.14, 8);
      head.x += (dx / dist) * speed;
      head.y += (dy / dist) * speed;

      // cuerpo: cada segmento sigue al anterior (cadena)
      for (let i = 1; i < N; i++) {
        const a = segs[i - 1], b = segs[i];
        const bx = b.x - a.x, by = b.y - a.y;
        const d = Math.hypot(bx, by) || 1;
        b.x = a.x + (bx / d) * spacing;
        b.y = a.y + (by / d) * spacing;
      }

      ctx.clearRect(0, 0, w, h);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // cuerpo (de la cola a la cabeza) con púas
      for (let i = N - 1; i >= 0; i--) {
        const p = segs[i];
        const tp = i / N;
        const radius = (1 - tp) * 8.5 + 2.2;
        const hue = 188 + tp * 132; // cyan -> púrpura -> magenta
        ctx.globalAlpha = 0.92;
        ctx.shadowBlur = 16;
        ctx.shadowColor = `hsl(${hue},100%,55%)`;
        ctx.fillStyle = `hsl(${hue},100%,60%)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();

        // púas del lomo
        if (i % 3 === 0 && i > 1 && i < N - 3) {
          const prev = segs[i - 1];
          const ang = Math.atan2(p.y - prev.y, p.x - prev.x);
          const px = Math.cos(ang - Math.PI / 2), py = Math.sin(ang - Math.PI / 2);
          const len = radius + 7;
          ctx.beginPath();
          ctx.moveTo(p.x + px * radius, p.y + py * radius);
          ctx.lineTo(p.x + px * len - Math.cos(ang) * 4, p.y + py * len - Math.sin(ang) * 4);
          ctx.lineTo(p.x + Math.cos(ang) * radius, p.y + Math.sin(ang) * radius);
          ctx.closePath();
          ctx.fillStyle = `hsl(${hue},100%,72%)`;
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      // cabeza: cuernos + ojos
      const hd = segs[0], nk = segs[1];
      const ang = Math.atan2(hd.y - nk.y, hd.x - nk.x);
      const perpX = Math.cos(ang + Math.PI / 2), perpY = Math.sin(ang + Math.PI / 2);

      for (const side of [-1, 1]) {
        const bx = hd.x + perpX * 4 * side, by = hd.y + perpY * 4 * side;
        const tx = bx - Math.cos(ang) * 13 + perpX * 7 * side;
        const ty = by - Math.sin(ang) * 13 + perpY * 7 * side;
        ctx.beginPath();
        ctx.moveTo(bx, by);
        ctx.lineTo(tx, ty);
        ctx.strokeStyle = "#00f0ff";
        ctx.lineWidth = 2.6;
        ctx.shadowBlur = 10; ctx.shadowColor = "#00f0ff";
        ctx.stroke();
      }
      ctx.shadowBlur = 0;
      for (const side of [-1, 1]) {
        const ex = hd.x + Math.cos(ang) * 5 + perpX * 3.6 * side;
        const ey = hd.y + Math.sin(ang) * 5 + perpY * 3.6 * side;
        ctx.beginPath();
        ctx.arc(ex, ey, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.shadowBlur = 9; ctx.shadowColor = "#ff006e";
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="neon-dragon" aria-hidden="true" />;
}
