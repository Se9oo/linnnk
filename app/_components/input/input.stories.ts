import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Input } from '@/app/_components/input';

const meta = {
	title: 'Components/Input',
	component: Input,
	tags: ['autodocs'],
	argTypes: {
		title: { control: 'text', description: 'title' },
		placeholder: { control: 'text', description: 'placeholder' },
		className: { control: 'text', description: 'custom styles' },
	},
	args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {},
};

export const InputWithTitle: Story = {
	args: {
		title: '이메일',
	},
};

export const ReadonlyInput: Story = {
	args: {
		readOnly: true,
	},
};
