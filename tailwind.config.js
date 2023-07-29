/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["inter", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      orange: "#FA541C",
      lightorange: "#FEE9D1",
      dark1: "#212B36",
      dark2: "#637381",
      dark3: "#919EAB",
      dark4: "#F9FAFB",
      blue: "#00BBD9",
    },
    extend: {},
  },
  plugins: [],
};
