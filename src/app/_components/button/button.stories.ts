import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Button from '@/app/_components/button';

const meta = {
	title: 'Components/Button/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		children: { control: 'text', description: 'text or ReactNode' },
		className: { control: 'text', description: 'custom styles' },
		theme: { control: 'radio', description: 'theme', options: ['primary', 'outline'], defaultValue: 'primary' },
		size: { control: 'radio', description: 'size', options: ['sm', 'md'], defaultValue: 'md' },
	},
	args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: 'Button',
	},
};

export const Outline: Story = {
	args: {
		children: 'Button',
		theme: 'outline',
	},
};
