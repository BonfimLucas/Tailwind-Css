/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'folhas': 'url(../img/folhas.jpg)'})
    },
  },
  plugins: [],
}