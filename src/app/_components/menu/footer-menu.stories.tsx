import type { Meta, StoryObj } from '@storybook/react';

import FooterMenu from '@/app/_components/menu/footer-menu';

const meta = {
	title: 'Components/Menu/FooterMenu',
	component: FooterMenu,
	tags: ['autodocs'],
	argTypes: {},
	decorators: [
		(Story) => (
			<div className="h-[200px]">
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof FooterMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
