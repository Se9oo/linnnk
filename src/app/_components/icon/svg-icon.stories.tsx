import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import SVGIcon from '@/app/_components/icon/svg-icon';

import { IconName, SVG_ICONS } from '@/constants/svg-icon';

const meta = {
	title: 'Components/SVG',
	component: SVGIcon,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `- props의 타입은 ***SVGProps&lt;SVGSVGElement&gt;*** 이므로 &lt;svg&gt;의 모든 프로퍼티를 props로 사용 가능함\n- 모든 아이콘들은 icons 항목에 정리되어있음`,
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		className: { control: 'text', description: '커스텀 스타일' },
		icon: {
			control: 'select',
			description: 'icon 종류',
			defaultValue: 'menu',
			options: [...Object.keys(SVG_ICONS)],
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
		const svgIcons = [...Object.keys(SVG_ICONS)].map((icon) => {
			switch (icon) {
				case 'linkList':
					return { icon, option: { width: 40, height: 40, viewBox: '0 0 24 24' } };
				case 'circlePlus':
					return { icon, className: 'fill-primary stroke-primary' };
				case 'polygonPlus':
					return { icon, option: { viewBox: '0 0 42 42' }, className: 'fill-primary stroke-primary' };
				case 'search':
					return { icon, className: 'fill-black' };
				default:
					return { icon };
			}
		});

		return (
			<div className="grid grid-cols-10 gap-2">
				{svgIcons.map((icon) => (
					<div key={icon.icon} className="flex flex-col items-center">
						<SVGIcon
							{...{ ...args, fill: 'none', icon: icon.icon as IconName, ...icon.option }}
							className={icon.className}
						/>
						<span>{icon.icon}</span>
					</div>
				))}
			</div>
		);
	},
};
