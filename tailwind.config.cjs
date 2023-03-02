module.exports = {
	content: ['./src/**/*.svelte'],
	// darkMode: 'media', // or false or 'class'
	theme: {
		extend: {
			colors: {
				yellow: {
					300: '#fc0',
					400: '#eb0'
				}
			}
		},
		fontFamily: {
			sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
		}
	},
	plugins: [
		require('@tailwindcss/typography')
		// ...
	]
};
