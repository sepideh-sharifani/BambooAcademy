/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	purge: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
	],
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	plugins: [require('tailwind-scrollbar-hide')],
	theme: {
		extend: {
			fontFamily: {
				Lalezar: ['Lalezar', 'sans-serif'],
				Yekan: ['Yekan', 'sans-serif'],
				WYekan: ['W_yekan', 'sans-serif'],
			},
			screens: {
				xs: '550px',
				xxs: '460px',
			},
			width: {
				100: '80rem',
			},
			height: {
				100: '300px',
			},

			colors: {
				greenishBlue: '#004458',
				footerBg: '#003544',
				footerBg2: '#002B37',
				footerText: '#09B28B',
			},
			keyframes: {
				showup: {
					'0%': { transform: 'scale(0)' },
					'100%': { transform: 'scale(1)' },
				},
				slideUp: {
					'0%': { transform: 'translateY(100%)' },
					'100%': { transform: 'translateY(0%)' },
				},
				slideDown: {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(0%)' },
				},
			},
			animation: {
				showingup: '300ms ease 0s 1 normal showup',
				slideUp: 'slideUp 0.5s ease',
				slideDown: 'slideDown 0.5s ease',
			},
			backgroundImage: {
				generalInfo:
					"url('../public/assets/neonbrand-zFSo6bnZJTw-unsplash.png')",
				js: "url('../public/assets/480px-Unofficial_JavaScript_logo_2.svg.png')",
				Csharp: "url('../public/assets/c--4.png')",
				bootstrap: "url('../public/assets/bootstrap-logo-vector.png')",
				java: "url('../public/assets/logo-java-text-color.png')",
				mentoring:
					"url('/..public/assets/business-people-with-finance-chart.png')",
				license:
					"url('../public/assets/young-handsome-curly-student-man-with-notebooks-isolated-white-wall.png')",
				construction:
					"url('../public/assets/cheerful-mood-group-people-business-conference-modern-classroom-daytime.png')",
				news: "url('../public/assets/scott-graham-5fNmWej4tAA-unsplash.png')",
				suggestions:
					"url('../public/assets/thought-catalog-505eectW54k-unsplash.png')",
				landingHeader:
					"url('../public/assets/brooke-cagle-g1Kr4Ozfoac-unsplash.png')",
				coursesHeader: "url('../public/assets/Group 87.png')",
				detailsHeader:
					"url('../public/assets/neonbrand-1-aA2Fadydc-unsplash.png')",
				bamboIcon: "url('../public/assets/bamboo c).png')",
				jsMark: "url('../public/assets/jsMark.png')",
			},

			gridTemplateRows: {
				20: 'repeat(20, minmax(0, 1fr))',
			},
			gridTemplateColumns: {
				20: 'repeat(20, minmax(0, 1fr))',
			},
			gridRowStart: {
				1: '1',
				2: '2',
				3: '3',
				4: '4',
				5: '5',
				6: '6',
				7: '7',
				8: '8',
				9: '9',
				10: '10',
				11: '11',
				12: '12',
				13: '13',
				14: '14',
				15: '15',
				16: '16',
				17: '17',
				18: '18',
				19: '19',
				20: '20',
				21: '21',
			},
			gridRowEnd: {
				1: '1',
				2: '2',
				3: '3',
				4: '4',
				5: '5',
				6: '6',
				7: '7',
				8: '8',
				9: '9',
				10: '10',
				11: '11',
				12: '12',
				13: '13',
				14: '14',
				15: '15',
				16: '16',
				17: '17',
				18: '18',
				19: '19',
				20: '20',
				21: '21',
			},
			gridColumnStart: {
				1: '1',
				2: '2',
				3: '3',
				4: '4',
				5: '5',
				6: '6',
				7: '7',
				8: '8',
				9: '9',
				10: '10',
				11: '11',
				12: '12',
				13: '13',
				14: '14',
				15: '15',
				16: '16',
				17: '17',
				18: '18',
				19: '19',
				20: '20',
				21: '21',
			},
			gridColumnEnd: {
				1: '1',
				2: '2',
				3: '3',
				4: '4',
				5: '5',
				6: '6',
				7: '7',
				8: '8',
				9: '9',
				10: '10',
				11: '11',
				12: '12',
				13: '13',
				14: '14',
				15: '15',
				16: '16',
				17: '17',
				18: '18',
				19: '19',
				20: '20',
				21: '21',
			},
		},
	},
};
