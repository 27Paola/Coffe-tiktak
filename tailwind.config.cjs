/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container:{
    center: true,
  },
  fontFamily:{
    Bebas:['"Bebas Neue","sans-serif"'],
    Abel:['"Abel","sans-serif"']
  },
    extend: {},
  },
  plugins: [],
}
