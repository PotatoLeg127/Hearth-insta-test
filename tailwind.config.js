/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#437BC7',
        secondary: '#FAC68E',
        accent: '#A47AA8',
      },
      backgroundColor: {
        'custom-white': '#FFFFFF',
      }
    },
  },
  plugins: [],
}
