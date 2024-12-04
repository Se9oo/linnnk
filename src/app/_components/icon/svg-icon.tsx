import { SVGProps } from 'react';

import { SVG_ICONS } from '@/constants/svg-icon';

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
	icon: keyof typeof SVG_ICONS;
	className?: string;
}

export default function SVGIcon({ icon, className, ...rest }: SVGIconProps) {
	const { path: Path, options } = SVG_ICONS[icon];

	return (
		<svg {...defaultOption} {...options} {...rest} className={className}>
			<Path />
		</svg>
	);
}
