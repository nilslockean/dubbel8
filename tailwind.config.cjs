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
		}
	}
	// variants: {
	// 	extend: {}
	// },
	// plugins: []
};
