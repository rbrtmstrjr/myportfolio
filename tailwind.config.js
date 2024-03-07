/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Russo One", "sans-serif"],
      secondary: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        aboutme: "url('/images/img8.jpg')",
        gamer: "url('/images/testi2.jpg')",
        designer: "url('/images/testi1.jpg')",
        developer: "url('/images/testi3.jpg')",
        photographer: "url('/images/gamer_.jpg')",
      },

      colors: {
        primary: "#03001C",
        secondary: "#05002C",
        tertiary: "#07003d",
        accent: "#FFC700",
        accent1: "#FF3EA5",
        accent2: "#64ffda",
        accent3: "#ff884d",
        accent4: "#9c79ff",
        meow: "#FF3EA5",
      },
      letterSpacing: {
        mini_stretch: "0.4em",
        stretch: "1em",
      },
      width: {
        slice: "31.8%",
      },
    },
  },
  plugins: [],
};
