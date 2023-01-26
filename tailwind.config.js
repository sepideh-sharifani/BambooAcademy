/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", ],
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
      backgroundImage: {
        'generalInfo': "url('./assets/neonbrand-zFSo6bnZJTw-unsplash.png')",
        'js': "url('./assets/480px-Unofficial_JavaScript_logo_2.svg.png')",
        'Csharp': "url('./assets/c--4.png')",
        'bootstrap': "url('./assets/bootstrap-logo-vector.png')",
        'java': "url('./assets/logo-java-text-color.png')",
        'mentoring': "url('./assets/business-people-with-finance-chart.png')",
        'license': "url('./assets/young-handsome-curly-student-man-with-notebooks-isolated-white-wall.png')",
        'construction': "url('./assets/cheerful-mood-group-people-business-conference-modern-classroom-daytime.png')",
        'news': "url('./assets/scott-graham-5fNmWej4tAA-unsplash.png')",
        'suggestions': "url('./assets/thought-catalog-505eectW54k-unsplash.png')",
        'landingHeader': "url('./assets/brooke-cagle-g1Kr4Ozfoac-unsplash.png')",
        'coursesHeader': "url('./assets/Group 87.png')",
        'detailsHeader': "url('./assets/neonbrand-1-aA2Fadydc-unsplash.png')",
        'bamboIcon': "url('./assets/bamboo c).png')",
        'jsMark': "url('./assets/jsMark.png')",
      },
      slideDown : {
        '0%' : {transform: 'translateY(-100%)'},
        '100%' : {transform: 'translateY(0%)'},
      }
    },
    gridTemplateRows: {
      '20': 'repeat(20, minmax(0, 1fr))',
    },
    gridTemplateColumns: {
      '20': 'repeat(20, minmax(0, 1fr))',
    },
    gridRowStart: {
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
      '13': '13',
      '14': '14',
      '15': '15',
      '16': '16',
      '17': '17',
      '18': '18',
      '19': '19',
      '20': '20',
      '21': '21',
    },
    gridRowEnd: {
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
      '13': '13',
      '14': '14',
      '15': '15',
      '16': '16',
      '17': '17',
      '18': '18',
      '19': '19',
      '20': '20',
      '21': '21',
    },
    gridColumnStart: {
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
      '13': '13',
      '14': '14',
      '15': '15',
      '16': '16',
      '17': '17',
      '18': '18',
      '19': '19',
      '20': '20',
      '21': '21',
    },
    gridColumnEnd: {
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
      '13': '13',
      '14': '14',
      '15': '15',
      '16': '16',
      '17': '17',
      '18': '18',
      '19': '19',
      '20': '20',
      '21': '21',
    }
  },
}
}
