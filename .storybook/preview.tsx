import type { Preview } from '@storybook/react';

import { pretendard } from '@/app/_font';

import '../public/globals.css';

const preview: Preview = {
	parameters: {
		nextjs: {
			appDirectory: true,
		},
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
