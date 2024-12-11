'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import SVGIcon from '@/app/_components/icon/svg-icon';
import AccountButton from '@/app/_components/menu/account-button';

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

export default function FooterMenu() {
	const pathname = usePathname();

	return (
		<nav className="fixed bottom-0 h-header w-full border-t bg-white">
			<ul className="flex h-full w-full items-center">
				<>
					{FOOTER_MENU.map((menuItem) => {
						const { id, iconKey, goTo, label } = menuItem;
						const isCurrentPage = goTo === pathname;

						return (
							<li key={id} className="basis-1/4">
								<Link href={goTo} className="flex w-full flex-col items-center justify-center">
									<SVGIcon
										icon={iconKey}
										width={32}
										height={32}
										className={`mb-1 fill-none ${isCurrentPage ? 'stroke-primary-hover stroke-2' : 'stroke-1'}`}
									/>
									<span
										className={`text-xs ${isCurrentPage ? 'font-semibold text-primary-hover' : 'font-normal text-black'}`}
									>
										{label}
									</span>
								</Link>
							</li>
						);
					})}
					<li className="basis-1/4">
						<AccountButton />
					</li>
				</>
			</ul>
		</nav>
	);
}
