import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import SVGButton from '@/app/_components/button/svg-button';

const meta = {
	title: 'Components/Button/SVGButton',
	component: SVGButton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		icon: { control: 'select', description: 'icon 종류', defaultValue: 'menu', options: ['menu'] },
		className: { control: 'text', description: 'svg custom styles' },
	},
	args: { onButtonClick: fn() },
} satisfies Meta<typeof SVGButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		icon: 'menu',
		width: 36,
		height: 36,
	},
};
