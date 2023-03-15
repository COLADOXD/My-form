/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Josefin: ["Josefin Sans", "sans-serif"],
      },
      textColor: (theme) => ({
        ...theme("colors"),

        primary: "#6a6e87",

        secondary: "hsl(236, 33%, 92%)",

        terceary: "hsl(236, 9%, 61%)",

        cuarto: "hsl(235, 19%, 35%)",

        quinto: "hsl(235, 21%, 11%)",

        sexto: "#141415",
      }),
      backgroundColor: (theme) => ({
        ...theme("colors"),

        primary: "#1a1e3b",

        secondary: "#151932",

        terceary: "#f87070",

        cuarto: "#141415",

        quinto: "hsl(235, 21%, 11%)",

        sexto: "hsl(237, 14%, 26%)",

        septimo: "hsl(220, 98%, 61%)",
        octavo: "hsl(235, 24%, 19%)",
      }),
      backgroundImage: {
        bgMoviles: "url('~@/assets/bg-mobile-dark.jpg')",
      },
    },
  },
  plugins: [],
};
