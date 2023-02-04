/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ['.src/App.jsx','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        //'backdrop' : "url(https://wallpapercave.com/wp/wp3194879.png)",
        'backdrop' : "url(https://wallpapercave.com/wp/wp5847252.jpg)",
        
      },
    },
  },
  plugins: [],
});