
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ["Rubik", "serif"],
        'lato': ["Lato", "serif"],
        'poppins': ["Poppins", "serif"],
        'orbitron': ["Orbitron", "serif"],
        'roboto': ["Roboto", "serif"],
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
  darkMode: 'class',
}
