import dynamic from 'next/dynamic';
import { ComponentType, SVGProps } from 'react';

type IconName = 'menu' | 'link' | 'home' | 'linkList' | 'circlePlus';

interface Icon {
	options?: SVGProps<SVGSVGElement>;
	path: ComponentType<{}>;
}

const icons: Record<IconName, Icon> = {
	menu: {
		path: dynamic(() => import('@/app/_components/icon/svg/menu-icon')),
	},
	link: {
		path: dynamic(() => import('@/app/_components/icon/svg/link-icon')),
	},
	home: {
		path: dynamic(() => import('@/app/_components/icon/svg/home-icon')),
	},
	linkList: {
		path: dynamic(() => import('@/app/_components/icon/svg/link-list-icon')),
	},
	circlePlus: {
		path: dynamic(() => import('@/app/_components/icon/svg/circle-plus-icon')),
	},
};

const defaultOption: SVGProps<SVGSVGElement> = {
	width: 24,
	height: 24,
	viewBox: '0 0 24 24',
	strokeWidth: 1,
	stroke: '#000000',
	strokeLinecap: 'round',
	strokeLinejoin: 'round',
};

export interface SVGIconProps extends SVGProps<SVGSVGElement> {
	icon: keyof typeof icons;
	className?: string;
}

export default function SVGIcon({ icon, className, ...rest }: SVGIconProps) {
	const { path: Path, options } = icons[icon];

	return (
		<svg {...defaultOption} {...options} {...rest} className={className}>
			<Path />
		</svg>
	);
}
