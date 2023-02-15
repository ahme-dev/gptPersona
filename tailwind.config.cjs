const config = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

	darkMode: "media",

	theme: {
		extend: {},
	},

	plugins: [require("@tailwindcss/forms")],
};

module.exports = config;
