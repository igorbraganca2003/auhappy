/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins']
      },
    },
    colors: {
      DarkBackground: '#140024',
      white: '#fff',
      black: '#000000',
      purple: '#4F4993',
      green: '#CBFF00',
      gray: '#B1B1B1',
      clearPurple: '#7972CD'
    },
  },
  plugins: [],
}

