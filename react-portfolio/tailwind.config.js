/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: ['./src/**/*.{js,jsx}'], // Specify the files to be scanned for classes
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'pink-color': '#ff90b3',
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
