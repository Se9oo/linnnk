import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import SVGIcon from '@/app/_components/icon/svg-icon';

const meta = {
	title: 'Components/SVG',
	component: SVGIcon,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		className: { control: 'text', description: '커스텀 스타일' },
		icon: { control: 'select', description: 'icon 종류', defaultValue: 'menu', options: ['menu'] },
	},
	args: { onClick: fn() },
} satisfies Meta<typeof SVGIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		icon: 'menu',
		width: 36,
		height: 36,
	},
};
