/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx}'], // Specify the files to be scanned for classes
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'pink-color': '#ff90b3',
				'custom-blue': '#0d223e',
			},
			screens: {
				xsm: '390px',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		// Include necessary plugins here, if any
	],
};
