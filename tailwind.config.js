/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        'red-450' : '#FE5F5F',
        'black-footer': '#2F2F2F',
        'link-color': '#fff'
      }
    },
  },
  plugins: [],
}

