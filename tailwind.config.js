/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ebc026", //yellow
        secondary: "#ededed", //white
        dark: "#232423", //gray
        darker: '#1c1d1c'
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1400px",
      xl: "1700px",
    },
  },
  plugins: [],
};