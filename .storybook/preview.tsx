import type { Preview } from '@storybook/react';

import '@/public/globals.css';

import { pretendard } from '@/app/_font';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		(Story) => (
			<div style={pretendard.style}>
				<Story />
			</div>
		),
	],
};

export default preview;
