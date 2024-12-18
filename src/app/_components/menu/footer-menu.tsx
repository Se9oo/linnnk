'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import SVGIcon from '@/app/_components/icon/svg-icon';

import { APP_ROUTES } from '@/constants/routes';
import { IconName } from '@/constants/svg-icon';

interface FooterMenu {
	id: string;
	iconKey: IconName;
	label?: string;
	goTo: (typeof APP_ROUTES)[keyof typeof APP_ROUTES];
}

const FOOTER_MENU: FooterMenu[] = [
	{
		id: 'home',
		iconKey: 'home',
		label: '홈',
		goTo: APP_ROUTES.HOME,
	},
	{
		id: 'link',
		iconKey: 'link',
		label: '링크',
		goTo: APP_ROUTES.LINK,
	},
	{
		id: 'linkList',
		iconKey: 'linkList',
		label: '링크 리스트',
		goTo: APP_ROUTES.LINK_LIST,
	},
];

const AddLinkButton = () => {
	return (
		<button className="flex w-full flex-col items-center justify-center">
			<SVGIcon viewBox="0 0 42 42" icon="polygonPlus" width={48} height={48} className="fill-primary stroke-white" />
		</button>
	);
};

const SearchButton = () => {
	return (
		<button className="flex w-full flex-col items-center justify-center">
			<SVGIcon icon="search" width={32} height={32} className="mb-1 stroke-0" />
			<span className="text-xs">검색</span>
		</button>
	);
};

const LinkMenuList = () => {
	const pathname = usePathname();

	return (
		<>
			{FOOTER_MENU.map((menuItem) => {
				const { id, iconKey, goTo, label } = menuItem;
				const isCurrentPage = goTo === pathname;

				return (
					<li key={id} className={`basis-1/5 ${id === 'linkList' ? 'order-4' : 'order-0'}`}>
						<Link href={goTo} className="flex w-full flex-col items-center justify-center">
							<SVGIcon
								icon={iconKey}
								width={32}
								height={32}
								className={`mb-1 fill-none ${isCurrentPage ? 'stroke-primary stroke-2' : 'stroke-1'}`}
							/>
							<span className={`text-xs ${isCurrentPage ? 'font-semibold text-primary' : 'font-normal text-black'}`}>
								{label}
							</span>
						</Link>
					</li>
				);
			})}
		</>
	);
};

export default function FooterMenu() {
	return (
		<nav className="fixed bottom-0 h-header w-full border-t bg-white">
			<ul className="relative flex h-full w-full items-center">
				<LinkMenuList />
				<li className="order-3 basis-1/5">
					<AddLinkButton />
				</li>
				<li className="order-5 basis-1/5">
					<SearchButton />
				</li>
			</ul>
		</nav>
	);
}
