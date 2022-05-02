const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
    },
    colors: {
      blue: {
        100: '#C2CCF4',
        200: '#5A6AAD',
        500: '122784',
        600: '#142365',
        700: '#121D4F'
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: {
        200: '#FFDBAD',
        500:'#ffa535',
      }
    },
    
  },
  plugins: [],
}