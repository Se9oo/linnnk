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
		icon: {
			control: 'select',
			description: 'icon 종류',
			defaultValue: 'menu',
			options: ['menu', 'link', 'home'],
		},
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
		fill: 'none',
	},
};

export const Icons: Story = {
	args: {
		width: 36,
		height: 36,
	} as any,
	render: (args) => {
		return (
			<div className="flex flex-wrap items-center gap-2">
				<SVGIcon {...{ ...args, icon: 'menu' }} />
				<SVGIcon {...{ ...args, icon: 'link', fill: 'none' }} />
				<SVGIcon {...{ ...args, icon: 'linkList', width: 40, height: 40, viewBox: '0 0 35 32', fill: 'none' }} />
				<SVGIcon {...{ ...args, icon: 'home', fill: 'none' }} />
			</div>
		);
	},
};
