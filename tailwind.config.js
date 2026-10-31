/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ['"Playfair Display"', "ui-serif", "Georgia", "serif"],
      },
      colors: {
        primary: "#152280",
        secondary: "#10ffda",
        dark: "#222222",
        light: "#f8f8f8",
      },
    },
  },
  plugins: [],
};
