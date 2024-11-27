import dynamic from 'next/dynamic';
import { ComponentType, SVGProps } from 'react';

type IconName = 'menu';

interface Icon {
	options?: SVGProps<SVGSVGElement>;
	path: ComponentType<{}>;
}

const icons: Record<IconName, Icon> = {
	menu: {
		options: {
			strokeLinecap: 'round',
			strokeLinejoin: 'round',
		},
		path: dynamic(() => import('@/app/_components/icon/svg/MenuIcon'), { ssr: false }),
	},
};

const defaultOption: SVGProps<SVGSVGElement> = {
	width: 24,
	height: 24,
	viewBox: '0 0 24 24',
	strokeWidth: 1,
	stroke: '#000000',
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
