import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-syne)"],
        mono: ["var(--font-space-mono)"],
        body: ["var(--font-dm-sans)"],
      },
      colors: {
        bg: {
          DEFAULT: "#050508",
          secondary: "#0a0a10",
        },
        surface: {
          DEFAULT: "#0f0f1a",
          secondary: "#141428",
        },
        accent: {
          cyan: "#00f5c4",
          purple: "#7c3aed",
          amber: "#f59e0b",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.07)",
          light: "rgba(255,255,255,0.12)",
        },
        muted: "#9090b0",
        faint: "#5c5c80",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "blink": "blink 1s step-end infinite",
        "orbit": "orbit 20s linear infinite",
        "orbit-reverse": "orbit 30s linear infinite reverse",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "scan": "scan 3s linear infinite",
        "slide-up": "slide-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in": "fade-in 0.5s ease forwards",
        "dot-bounce": "dot-bounce 1.2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        blink: {
          "50%": { opacity: "0" },
        },
        orbit: {
          to: { transform: "translate(-50%,-50%) rotate(360deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6", boxShadow: "0 0 20px rgba(0,245,196,0.2)" },
          "50%": { opacity: "1", boxShadow: "0 0 40px rgba(0,245,196,0.5)" },
        },
        scan: {
          "0%": { top: "0%" },
          "100%": { top: "100%" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "dot-bounce": {
          "0%, 80%, 100%": { transform: "scale(0.6)", opacity: "0.4" },
          "40%": { transform: "scale(1)", opacity: "1" },
        },
      },
      boxShadow: {
        "glow-cyan": "0 0 40px rgba(0,245,196,0.2)",
        "glow-purple": "0 0 40px rgba(124,58,237,0.2)",
        "glow-amber": "0 0 30px rgba(245,158,11,0.15)",
        "card": "0 20px 60px rgba(0,0,0,0.4)",
      },
      backgroundImage: {
        "grid": "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
