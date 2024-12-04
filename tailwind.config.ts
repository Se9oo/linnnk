import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './.storybook'],
	theme: {
		screens: {
			tablet: '600px',
			laptop: '1024px',
		},
		extend: {
			fontFamily: {
				pretendard: ['var(--font-pretendard)'],
			},
			colors: {
				primary: '#79BAF2',
				'primary-hover': '#4794ea',
				'primary-active': '#3178df',
			},
			height: {
				header: '64px',
				'screen-except-header': 'calc(100vh - 64px)',
			},
			boxShadow: {
				input: 'inset 0 0 0 1px rgba(0,27,55,.1)',
				'input-focus': 'inset 0 0 0 2px #2A737D',
			},
		},
	},
	plugins: [],
};
export default config;
