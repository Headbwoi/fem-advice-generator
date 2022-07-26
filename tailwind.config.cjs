/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./main.js"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
    fontFamily: {
      sans: ["'Manrope', 'sans_serif'"],
    },
    extend: {
      colors: {
        Light_Cyan: "hsl(193, 38%, 86%)",
        Neon_Green: "hsl(150, 100%, 66%)",
        Grayish_Blue: "hsl(217, 19%, 38%)",
        Dark_Grayish_Blue: "hsl(217, 19%, 24%)",
        Dark_Blue: "hsl(218, 23%, 16%)",
      },
    },
  },
  plugins: [],
}
