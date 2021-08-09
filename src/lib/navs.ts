export type NavItem = {
	path: string;
	title: string;
};

export type Navigation = NavItem[];

export const mainNav: Navigation = [
	{ path: '/', title: 'Hem' },
	{ path: '/prova-pa', title: 'Prova på' },
	{ path: '/prova-pa', title: 'Bokning' },
	{ path: '/om', title: 'Om oss' },
	{ path: '/om', title: 'Kontakt' }
];
