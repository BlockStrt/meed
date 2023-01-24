/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,}",   
    "./components/**/*.{js,ts,jsx,tsx,}",],
    theme: {
      extend: { 
        fontFamily: {
        FallCome: "FallCome",
        Mont: "Mont",
        MontItalic: "MontItalic",
      }},
    },
    plugins: [],
  }
  