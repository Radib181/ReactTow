/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: { // Corrected casing from "Container" to "container"
      center: true // Fixed "ture" to "true"
    },
    extend: {
      colors: { // Fixed "color" to "colors"
        primary: "#772ab3", // Removed extra spaces
        secondary: "#adb2b1", // Fixed "bl" to "b1"
        foreground: "#ffffff" // Fixed typo in "foregroud"
      },
      fontFamily: {
        mplusl: ["M", "sans-serif"] // Corrected syntax for defining font family
      }
    }
  },
  darkMode: "class",
  plugins: [nextui()],
};


