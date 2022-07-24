/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'black': '#000000',
      'special': '#1F1B1C',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Outfit', 'serif'],
    },
    opacity: {
      '5':'0.05',
      '15': '0.15',
      '35': '0.35',
      '50':'0.50',
      '65': '0.65',
      '85': '0.85',
      '100': '1',
     },
    extend: {
      
    },
  },
  plugins: [],
}
