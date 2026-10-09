/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Change values in src/index.css — not here
        primary: {
          DEFAULT: "var(--color-primary)",
          light: "var(--color-primary-light)",
          dark: "var(--color-primary-dark)",
          soft: "var(--color-primary-soft)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          dark: "var(--color-secondary-dark)",
        },
        tertiary: {
          DEFAULT: "var(--color-tertiary)",
          light: "var(--color-tertiary-light)",
          dark: "var(--color-tertiary-dark)",
        },
        background: "var(--color-background)",
        surface: {
          DEFAULT: "var(--color-surface)",
          soft: "var(--color-surface-soft)",
        },
        foreground: "var(--color-foreground)",
        heading: "var(--color-heading)",
        subtext: "var(--color-subtext)",
        line: {
          DEFAULT: "var(--color-border)",
          strong: "var(--color-border-strong)",
        },
        sale: "var(--color-sale)",
        soldout: "var(--color-soldout)",
        success: "var(--color-success)",
        "on-primary": "var(--color-on-primary)",
        "on-secondary": "var(--color-on-secondary)",
      },
      fontFamily: {
        sans: ["Geist", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["Fraunces", "ui-serif", "Georgia", "serif"],
      },
      borderRadius: {
        block: "var(--radius-block)",
        pill: "var(--radius-pill)",
      },
      maxWidth: {
        container: "var(--container-max)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "zoom-out": {
          from: { transform: "scale(1.08)" },
          to: { transform: "scale(1)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "zoom-out": "zoom-out 1.2s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
