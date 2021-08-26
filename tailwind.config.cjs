module.exports = {
	purge: ['./src/**/*.svelte'],
	mode: 'jit',
	// darkMode: false, // or 'media' or 'class'
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
	// variants: {
	// 	extend: {}
	// }
};
