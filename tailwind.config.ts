import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#6C2BD9",
        "brand-light": "#9B6BF2",
        "brand-dim": "rgba(108,43,217,0.15)",
        accent: "#0ABFBC",
        "accent-light": "#3DD6D4",
        "accent-dim": "rgba(10,191,188,0.15)",
        "bg-dark": "#0F0F1A",
        surface: "#1A1A3E",
        "surface-2": "#12122A",
        "bg-light": "#F8F7FF",
        muted: "#6B7280",
        border: "#D1D5DB",
        error: "#EF4444",
      },
      fontFamily: {
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        body: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "20px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(108,43,217,0.10)",
        glow: "0 0 40px rgba(108,43,217,0.25)",
        "glow-accent": "0 0 40px rgba(10,191,188,0.25)",
        "glow-sm": "0 0 20px rgba(108,43,217,0.15)",
      },
      animation: {
        "orb-1": "orb1 20s ease-in-out infinite",
        "orb-2": "orb2 25s ease-in-out infinite",
        "orb-3": "orb3 18s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease-out both",
        "fade-up-1": "fadeUp 0.7s ease-out 0.1s both",
        "fade-up-2": "fadeUp 0.7s ease-out 0.2s both",
        "fade-up-3": "fadeUp 0.7s ease-out 0.3s both",
        "fade-up-4": "fadeUp 0.7s ease-out 0.4s both",
        "scale-in": "scaleIn 0.5s ease-out both",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "pulse-brand": "pulseBrand 2.5s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "ticker": "ticker 40s linear infinite",
        "border-trace": "borderTrace 2s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "count-up": "countUp 0.6s ease-out both",
        "slide-in-left": "slideInLeft 0.6s ease-out both",
        "slide-in-right": "slideInRight 0.6s ease-out both",
      },
      keyframes: {
        orb1: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(80px, -60px) scale(1.15)" },
          "66%": { transform: "translate(-60px, 80px) scale(0.9)" },
        },
        orb2: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(-80px, 60px) scale(1.2)" },
          "66%": { transform: "translate(60px, -40px) scale(0.85)" },
        },
        orb3: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(40px, 60px) scale(1.1)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.93)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseBrand: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(108,43,217,0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(108,43,217,0)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        slideInLeft: {
          from: { opacity: "0", transform: "translateX(-30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          from: { opacity: "0", transform: "translateX(30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        countUp: {
          from: { opacity: "0", transform: "translateY(10px) scale(0.9)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        borderTrace: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
      },
      backgroundSize: {
        "200%": "200%",
        "400%": "400%",
      },
    },
  },
  plugins: [],
};

export default config;
