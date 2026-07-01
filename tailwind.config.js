/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050008",
        panel: "#0a0014",
        cyan: "#00f0ff",
        magenta: "#ff006e",
        purple: "#a855f7",
      },
      fontFamily: {
        display: ["Orbitron", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
        body: ["Rajdhani", "sans-serif"],
      },
    },
  },
  plugins: [],
};
