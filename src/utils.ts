export function readLocal(key: string): any {
	let localValue = localStorage.getItem(key);
	if (localValue === null) return "";

	try {
		let parsedValue = JSON.parse(localValue);
		return parsedValue;
	} catch (e) {
		return {};
	}
}

export function setLocal(key: string, value: any): void {
	localStorage.setItem(key, JSON.stringify(value));
}

export function getFirstTwoLetters(str: string, fallback: string): string {
	let hasTwoLetters = str[0] && str[1];

	if (!hasTwoLetters) return fallback;

	return str[0] + str[1];
}
