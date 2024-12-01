/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      transitionProperty: {
        ...defaultTheme.transitionProperty,
        width: 'width',
        height: 'height',
      },
    },
  },
  plugins: [],
}