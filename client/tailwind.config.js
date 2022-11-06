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
        white: "#ffffff",
      },
      fontFamily: {
        didot: "didot",
        bigCasion: "Big Caslon",
        montaga: "Montaga",
      },
      boxShadow: {
        bright: " 0 1rem 2rem rgba(255, 255, 255, 0.2)",
      },
      boxShadow: {
        signin: "0px 3.66396px 3.66396px rgba(0, 0, 0, 0.25)",
      },
    },
  },

  plugins: [],
};
