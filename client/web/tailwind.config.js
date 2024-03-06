/** @format */

// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "primary" : "#A3FDA1",
        "secondary" : "#925FF0",
        "tertiary" : "#2D2D2D",
        "back" : "#0B0B0B",
      },
      fontFamily : {
        body : ["Gabarito"]
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
// export const darkMode = "class";
// export const plugins = [nextui()];
