import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        layout: "1440px",
      },
      colors: {},
      fontFamily: {
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
} satisfies Config;
