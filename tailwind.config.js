/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'video': 'rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;',
      }
    },
  },
  plugins: [],
}