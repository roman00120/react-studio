/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"] ,
  theme: {
    extend: {
      colors: {
        "ocean": {
          950: "#05070d",
          900: "#0b1220",
          800: "#141e33",
          700: "#1c2842",
          600: "#253356",
          500: "#33436e",
          400: "#5b6da0",
          300: "#8fa1c6",
          200: "#b8c6e0",
          100: "#dde4f2"
        },
        "mint": {
          500: "#5ce1c5",
          400: "#7ef0d8"
        },
        "sun": {
          500: "#f6c453"
        }
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 45px -35px rgba(92, 225, 197, 0.3)",
        card: "0 20px 45px -35px rgba(7, 12, 22, 0.9)",
        glow: "0 0 0 1px rgba(92, 225, 197, 0.2), 0 25px 80px -50px rgba(92, 225, 197, 0.5)"
      },
      backgroundImage: {
        "hero": "radial-gradient(circle at top, rgba(92,225,197,0.12), transparent 45%), radial-gradient(circle at 20% 10%, rgba(246,196,83,0.08), transparent 40%), linear-gradient(180deg, #0b1220 0%, #05070d 100%)",
        "grid": "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)"
      }
    },
  },
  plugins: [],
};
