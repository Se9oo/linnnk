import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./.storybook',
	],
	theme: {
		extend: {
			fontFamily: {
				pretendard: ['var(--font-pretendard)'],
			},
			colors: {
				primary: '#32b67a',
				'primary-hover': '#0d8e5a',
				'primary-active': '#0b714b',
			},
		},
	},
	plugins: [],
};
export default config;
