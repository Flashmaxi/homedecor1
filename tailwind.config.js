/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1.25rem",
        lg: "2rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      "2xl": "1440px",
    },
    fontFamily: {
      primary: ['"Playfair Display"', "serif"],
      secondary: ["Inter", "sans-serif"],
      display: ['"Playfair Display"', "serif"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a1d20",
          hover: "#2a2e33",
          light: "#3a3f45",
        },
        secondary: "#5a5f63",
        accent: {
          DEFAULT: "#cda274",
          secondary: "#f4f0ec",
          hover: "#b88c5d",
          light: "#e5d3b8",
          deep: "#a07a4f",
        },
        cream: {
          50: "#fdfbf7",
          100: "#faf6ef",
          200: "#f4ecdf",
          300: "#ede0c8",
        },
        ink: {
          900: "#1a1d20",
          700: "#3a3f45",
          500: "#5a5f63",
          300: "#a0a3a6",
        },
      },
      letterSpacing: {
        widest: "0.25em",
        ultra: "0.4em",
      },
      fontSize: {
        "display-1": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-2": ["clamp(2.25rem, 5vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
        "display-3": ["clamp(1.75rem, 3vw, 2.75rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "eyebrow": ["0.75rem", { lineHeight: "1", letterSpacing: "0.25em" }],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "line-grow": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 1s ease-out forwards",
        "line-grow": "line-grow 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "marquee": "marquee 40s linear infinite",
      },
      boxShadow: {
        luxe: "0 30px 60px -20px rgba(26, 29, 32, 0.15)",
        "luxe-sm": "0 12px 30px -10px rgba(26, 29, 32, 0.12)",
      },
    },
  },
  plugins: [],
};
