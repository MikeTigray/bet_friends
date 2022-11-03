/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        primary: "#000000",
        secondary: "#FFF8EA",
      },
      textColor: {
        tansparent: "transparent",
        secondary: "#FFF8EA",
        black: "#000000",
      },
      fontFamily: {
        didot: "didot",
        bigCasion: "Big Caslon",
      },
      boxShadow: {
        bright: " 0 1rem 2rem rgba(255, 255, 255, 0.2)",
      },
    },
  },

  plugins: [],
};
