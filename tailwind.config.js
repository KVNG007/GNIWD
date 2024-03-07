/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],



  theme: {
    screens: { 
      "xs": '320px',
      'sm': '385px', 
      'md': '1024px', 
      'lg': '1280px', 
      'xl': '1920px', 
    }, 
    extend: {
      colors: {
        black: '#1E1E1E',
        white: '#FFFFFF',
        accent: '#CD9656',
        purple: '#54347B',
        brown: '#603522',
        grey: '#C9C9C9',
        invic: '#00000000'
      },
      fontFamily: {
        Satoshi: ['Satoshi', 'sans-serif'],
        Rufina: ['Rufina'],
      },
      boxShadow: {
        '4xl': '0px 10px 20px 0px rgba(0, 0, 0, 0.14)',
        'special': '3.5px 3.5px 20px 0px rgba(0, 0, 0, 0.15)',
      },
      
    },
  },
  plugins: [],
}

