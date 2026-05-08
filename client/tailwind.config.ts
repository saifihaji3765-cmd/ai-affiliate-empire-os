import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f172a",
        foreground: "#f8fafc",
        primary: "#3b82f6",
        secondary: "#1e293b",
        card: "#111827",
        border: "#334155"
      }
    }
  },
  plugins: []
};

export default config;
