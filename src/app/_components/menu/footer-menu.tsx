'use client';

import Link from 'next/link';

import SVGIcon from '@/app/_components/icon/svg-icon';

import { APP_ROUTES } from '@/constants/routes';

const FOOTER_MENU = [
	{
		id: 'home',
		icon: <SVGIcon icon="home" width={32} height={32} className="fill-none" />,
		goTo: APP_ROUTES.HOME,
	},
	{
		id: 'link',
		icon: <SVGIcon icon="link" width={32} height={32} className="fill-none" />,
		goTo: APP_ROUTES.LINK,
	},
	{
		id: 'addLink',
		icon: <SVGIcon icon="circlePlus" width={60} height={60} className="fill-primary stroke-primary" />,
	},
	{
		id: 'linkList',
		icon: <SVGIcon icon="linkList" width={32} height={32} className="fill-none" />,
		goTo: APP_ROUTES.LINK_LIST,
	},
	{
		id: 'menu',
		icon: <SVGIcon icon="menu" width={32} height={32} />,
	},
];

export default function FooterMenu() {
	// TODO
	const handleAddLink = () => {};
	const handleOpenSideMenu = () => {};

	return (
		<nav className="h-header fixed bottom-0 w-full border-t bg-white">
			<ul className="flex h-full w-full items-center">
				{FOOTER_MENU.map((menuItem) => {
					const { id, icon, goTo } = menuItem;

					return (
						<li key={id} className="h-full basis-1/5">
							{goTo ? (
								<Link href={goTo} className="flex h-full w-full items-center justify-center">
									{icon}
								</Link>
							) : (
								<button
									type="button"
									onClick={id === 'addLink' ? handleAddLink : handleOpenSideMenu}
									className="flex h-full w-full items-center justify-center"
								>
									{icon}
								</button>
							)}
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
