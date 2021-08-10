import { readable, Readable } from 'svelte/store';

export type NavItem = {
	path: string;
	title: string;
	hideOnMobile?: boolean;
};

export type Navigation = NavItem[];

export const navigation: Readable<Navigation> = readable([
	{ path: '/', title: 'Hem', hideOnMobile: true },
	{ path: '/prova-pa', title: 'Prova på' },
	{ path: '/bokning', title: 'Bokning' },
	{ path: '/om', title: 'Om oss', hideOnMobile: true },
	{ path: '/kontakt', title: 'Kontakt' }
]);
