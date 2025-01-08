import type { Meta, StoryObj } from '@storybook/react';
import { SessionProvider } from 'next-auth/react';

import FooterMenu from '@/app/_components/footer/footer-menu';

const meta = {
	title: 'Components/Menu/FooterMenu',
	component: FooterMenu,
	tags: ['autodocs'],
	argTypes: {},
	decorators: [
		(Story) => (
			<SessionProvider>
				<div className="h-[200px]">
					<Story />
				</div>
			</SessionProvider>
		),
	],
} satisfies Meta<typeof FooterMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
