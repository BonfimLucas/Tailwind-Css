/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkmode: 'class',
  theme: {
    extend: {
      colors:{
        amber: colors.amber,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}