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

export function getFirstTwoLetters(str: string, fallbackStr: string): string {
	// clean up the string
	str = str.trim();

	// if has more than one word
	if (str.includes(" ")) {
		let words = str.split(" ");
		let firstLetters = words.map((word) => word[0]);
		return firstLetters[0] + firstLetters[1];
	}

	// otherwise if one word

	let hasTwoLetters = str[0] && str[1];

	if (!hasTwoLetters) return fallbackStr;

	return str[0] + str[1];
}
