// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors : {
        "primary" : "#A3FDA1",
        "secondary" : "#925FF0",
        "tertiary" : "#2D2D2D",
        "back" : "#0B0B0B"
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};