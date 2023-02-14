const config = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

	theme: {
		extend: {},
	},

	plugins: [require("@tailwindcss/forms")],
};

module.exports = config;
