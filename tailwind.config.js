/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
  theme: {
    extend:
    {
      fontFamily: {
        "Lalezar": ["Lalezar", "sans-serif"]
      },
      screens: {
        "xs" : "550px",
        "xxs" : "460px",
      },
      keyframes: {
        showup : {
          '0%':{transform: 'scale(0)'},
          '100%' :{transform: 'scale(1)'}
        }
      },
      animation:{
        'showingup' :'300ms ease 0s 1 normal showup',
      },
    },
  },
}
