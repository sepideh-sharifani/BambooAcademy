/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend:
    {
      fontFamily: {
        "Lalezar": ["Lalezar", "sans-serif"]
    },
    colors:{
      greenishBlue : '#004458',
      footerBg : '#003544',
      footerBg2: '#002B37',
      footerText: '#09B28B'
    },
      width: {
        '100': '50rem',
    },
    height:{
      '100':'300px',
    },
    animation:{
      'slideUp' : 'slideUp 0.5s ease',
      'slideDown' : 'slideDown 0.5s ease'
    },
    keyframes:{
      slideUp : {
        '0%' : {transform: 'translateY(100%)'},
        '100%' : {transform: 'translateY(0%)'},
      },
      slideDown : {
        '0%' : {transform: 'translateY(-100%)'},
        '100%' : {transform: 'translateY(0%)'},
      }
    },
  },
}
}
