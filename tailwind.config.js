/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        clash: ["Clash Display", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#25CEB0",
        secondary: "#8D8D8D",
      },
    },
  },
  plugins: [],
};
