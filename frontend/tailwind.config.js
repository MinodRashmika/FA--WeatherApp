/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ['.src/App.jsx','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'backdrop' : "url(./assets/LtS7Q.png)",
      },
    },
  },
  plugins: [],
});