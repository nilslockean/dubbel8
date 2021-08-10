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
			},
			fontFamily: {
				serif: [
					'Roboto Slab',
					'system-ui',
					'-apple-system',
					'Segoe UI',
					'Roboto',
					'Helvetica',
					'Arial',
					'sans-serif',
					'Apple Color Emoji',
					'Segoe UI Emoji'
				]
			}
		}
	}
	// variants: {
	// 	extend: {}
	// },
	// plugins: []
};
