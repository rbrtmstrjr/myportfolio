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
        gamer: "url('/images/gamer_bg.jpg')",
        designer: "url('/images/designers.jpg')",
        developer: "url('/images/devs.jpg')",
      },

      colors: {
        primary: "#03001C",
        secondary: "#1100a1",
        tertiary: "#130b51",
        accent: "#FFC700",
        accent1: "#ff3e6b",
        accent2: "#64ffda",
        accent3: "#ff884d",
        accent4: "#9c79ff",
      },
      letterSpacing: {
        mini_stretch: "0.4em",
        stretch: "1em",
        expand: ".05em",
      },
      width: {
        slice: "31.8%",
      },
    },
  },
  plugins: [],
};
