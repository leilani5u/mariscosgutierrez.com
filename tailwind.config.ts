import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          aqua: "#1AA6C5",
          coral: "#C93A32",
          black: "#111111",
          sand: "#F3E8D2",
          white: "#FFFFFF",
          ink: "#12384A",
          wood: "#C99A57",
          paper: "#FFF9ED",
          deep: "#0D2635",
          gold: "#D3B074"
        }
      },
      fontFamily: {
        display: ["Bebas Neue", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      boxShadow: {
        neon: "0 0 18px rgba(26, 166, 197, 0.38)",
        coral: "0 0 20px rgba(201, 58, 50, 0.36)",
        card: "0 18px 40px rgba(0, 0, 0, 0.28)"
      }
    }
  },
  plugins: []
} satisfies Config;
