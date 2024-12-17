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
				'back-drop': 'rgba(0,0,0,0.7)',
			},
			height: {
				header: '64px',
				'screen-except-header': 'calc(100vh - 64px)',
				'screen-except-header-and-footer-menu': 'calc(100dvh - 64px - 64px)',
			},
			boxShadow: {
				input: 'inset 0 0 0 1px rgba(0,27,55,.1)',
				'input-focus': 'inset 0 0 0 2px #2A737D',
			},
			keyframes: {
				'fade-in': {
					'0%': {
						opacity: '0',
					},
					'100%': {
						opacity: '1',
					},
				},
			},
			animation: {
				'fade-in': 'fade-in 0.2s ease',
			},
		},
	},
	plugins: [],
};
export default config;
