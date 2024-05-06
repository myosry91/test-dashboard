/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#F4F7FE", // Example primary color
      secondary: "#C8C4CC", // Example secondary color
      accent: "#f4f7fe", // Example accent color
      white: "#FFFFFF",
      black: "#000000",
    },
    fontFamily: {
      san: ["Rajdhani", "sans-serif"], // Rajdhani as primary font
      serif: ["Merriweather", "serif"], // Example serif font
      mono: ["Inconsolata", "monospace"], // Example monospace font
    },
    fontSize: {
      pageHeader: "25px",
      secHeader: "18px",
      links: "16px",
    },
    fontWeight: {
      primary: 700,
      secondary: 500,
    },
  },
  plugins: [],
};
