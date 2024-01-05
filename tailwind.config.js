/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      // 'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'mobile': '10px',
      // => @media (min-width: 480px) { ... }

      'desktop': '1024px',
      // => @media (min-width: 1024px) { ... }
    },
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
      lightGray: '#808080',
      clearPurple: '#7972CD'
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

