import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: "0.667rem",
        sm: "0.778rem",
        base: "1rem",
        xl: "1.278rem",
        "2xl": "1.556rem",
        "3xl": "1.944rem",
        "4xl": "2.444rem",
        "5xl": "3.056rem",
        "6xl": "3.833rem",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        orange: {
          50: "#FFEFE6",
          100: "#FFCFB0",
          200: "#FFB78A",
          300: "#FF9654",
          400: "#FF8233",
          500: "#FF6300",
          600: "#E85A00",
          700: "#B54600",
          800: "#8C3600",
          900: "#6B2A00",
        },
        black: {
          50: "#E6E6E6",
          100: "#B0B0B0",
          200: "#8A8A8A",
          300: "#545454",
          400: "#333333",
          500: "#000000",
        },
      },
    },
  },
} satisfies Config;
