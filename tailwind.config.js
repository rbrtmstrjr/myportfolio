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
        aboutme: "url('/images/myprofile.jpg')",
        gamer: "url('/images/gamer_bg.jpg')",
        designer: "url('/images/designers.jpg')",
        developer: "url('/images/devs.jpg')",
        dashboard: "url('/images/macbook.png')",
        wanderlinx: "url('/images/wanderlinx.png')",
        uiux: "url('/images/uiuxdesign.jpg')",
        graphic: "url('/images/graphic.png')",
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
        accent10: "#fff4cb",
        accent11: "#ffc3d1",
        accent22: "#c8fff2",
        accent33: "#ffdbc9",
        accent44: "#dbceff",
        darkGray: "#7C8094",
      },
      letterSpacing: {
        mini_stretch: "0.4em",
        stretch: "1em",
        expand: ".02em",
      },
      width: {
        slice: "31.8%",
      },
    },
  },
  plugins: [],
};
