import { readable, Readable } from 'svelte/store';

export type NavItem = {
	path: string;
	title: string;
};

export type Navigation = NavItem[];

export const navigation: Readable<Navigation> = readable([
	{ path: '/', title: 'Hem' },
	{ path: '/prova-pa', title: 'Prova på' },
	{ path: '/bokning', title: 'Bokning' },
	{ path: '/om', title: 'Om oss' },
	{ path: '/kontakt', title: 'Kontakt' }
]);

export const footerNavigation: Readable<Navigation> = readable([
	{ path: '/loggbok', title: 'Loggbok' },
	{ path: '/gdpr', title: 'Integritetspolicy' },
	{ path: '/villkor', title: 'Bokningsvillkor' }
]);
