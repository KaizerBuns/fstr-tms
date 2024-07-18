/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"],
      },
      animation: {
        colorPulse: "colorPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        colorPulse: {
          "0%, 100%": { backgroundColor: "#ffe9e9" }, // red
          "50%": { backgroundColor: "#ffd2d2" }, // white
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  extend: {
    backgroundColor: {
      "gray-25": "#F9FAFB", // Replace with the color code you want
    },
  },
};
