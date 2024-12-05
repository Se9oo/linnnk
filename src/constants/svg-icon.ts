import dynamic from 'next/dynamic';
import { ComponentType, SVGProps } from 'react';

type IconName = 'menu' | 'link' | 'home' | 'linkList' | 'circlePlus';

interface Icon {
	options?: SVGProps<SVGSVGElement>;
	path: ComponentType<{}>;
}

export const SVG_ICONS: Record<IconName, Icon> = {
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