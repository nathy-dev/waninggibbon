/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        mars: "#FC3D21",
        saturn: "#0B3D91",
        luna: "#FAFEA8",
        overlay: "rgba(0,0,0,0.8)",
        // background color overlay for alert dialogs, modals, etc.

        // light mode
        bg: "#fff4e0",
        text: "#000",
        border: "#000",

        // dark mode
        darkBg: "#1D1F27",
        darkText: "#eeefe9",
        darkBorder: "#000",
      },
      borderRadius: {
        base: "0px",
      },
      boxShadow: {
        light: "4px 4px 0px 0px #000",
        dark: "4px 4px 0px 0px #000",
      },
      translate: {
        boxShadowX: "4px",
        boxShadowY: "4px",
        reverseBoxShadowX: "-4px",
        reverseBoxShadowY: "-4px",
      },
      fontWeight: {
        base: "500",
        heading: "700",
      },
      fontFamily: {
        publicSans: ["Public Sans", "sans-serif"],
        nasa: ["Nasa", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
