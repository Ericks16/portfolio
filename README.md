# 🌌 Portafolio — Erick Erazo

Portafolio personal cyberpunk de servicios y tecnologías. Diseño neón, fondo de
partículas interactivo, glitch, texto tipeado y animaciones con Framer Motion.

## 🛠️ Stack
- **React + TypeScript**
- **Vite** (build ultrarrápido)
- **Tailwind CSS** + CSS personalizado (efectos neón)
- **Framer Motion** (animaciones)
- **react-icons** (logos de tecnologías)

## 🚀 Desarrollo local
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # genera /dist para producción
npm run preview    # previsualiza el build
```

## ☁️ Deploy en Vercel (gratis)
1. Sube este proyecto a un repo de GitHub.
2. Entra a [vercel.com](https://vercel.com) → **Add New → Project** → importa el repo.
3. Vercel detecta Vite automáticamente (Build: `npm run build`, Output: `dist`).
4. **Deploy**. Tendrás una URL tipo `https://tu-portfolio.vercel.app`.

## ✏️ Personalizar
- **Servicios y tecnologías:** `src/data.tsx`
- **Textos y secciones:** `src/App.tsx`
- **Colores y efectos:** `src/index.css`
- **Contacto:** constantes `EMAIL`, `LINKEDIN`, `GITHUB` en `src/App.tsx`
