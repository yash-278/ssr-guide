/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "spring-green": "#02ffa2",
        jade: "#00BA77",
        "blue-dianne": "#22434F",
        mirage: "#16222C",
      },
      backgroundImage: {
        "hero-bg": "url('/src/assets/images/hero-bg.jpg')",
        "hero-bg-2": "url('/src/assets/images/hero-bg-2.jpg')",
      },
    },
  },
  plugins: [],
};
