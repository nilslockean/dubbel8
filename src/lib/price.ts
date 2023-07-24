// 4400 SEK per instructor per day
const BASE_PRICE = 4400;

// 5% discount per instructor
const BASE_DISCOUNT = 0.05;

// Max number of participants is 12
export const MAX = 12;

export function getNumInstructors(nParticipants: number) {
	return Math.ceil(nParticipants / 4);
}

export function getPrice(
	nInstructors: number,
	nParticipants?: number
): {
	price: number;
	display: string;
	discount: number;
	errorMessage?: string;
	perPerson?: number;
	perPersonDisplay?: string;
} {
	if (nInstructors <= 0) {
		return {
			price: 0,
			display: '',
			discount: 0,
			errorMessage: 'Något gick fel.'
		};
	}

	if (nInstructors > 3) {
		return {
			price: 0,
			display: '0 kr',
			discount: 0,
			errorMessage: 'Kontakta oss för större bokningar.'
		};
	}

	const discount = (nInstructors - 1) * BASE_DISCOUNT;
	const price = nInstructors * BASE_PRICE * (1 - discount);

	const options: Intl.NumberFormatOptions = {
		style: 'currency',
		currency: 'SEK',
		minimumFractionDigits: 0
	};

	const display = new Intl.NumberFormat('sv-SE', options).format(price) + ' inkl. moms';

	const perPerson = nParticipants ? price / nParticipants : undefined;
	const perPersonDisplay = perPerson
		? new Intl.NumberFormat('sv-SE', options).format(perPerson) + ' /person'
		: undefined;

	return {
		price,
		display,
		discount,
		perPerson,
		perPersonDisplay
	};
}

export function getMinPrice(): number {
	const prices: number[] = [];

	// For loop 1 to max
	for (let i = 1; i <= MAX; i++) {
		const nInstructors = getNumInstructors(i);
		prices.push(getPrice(nInstructors, i).perPerson || 0);
	}

	return Math.min(...prices);
}
