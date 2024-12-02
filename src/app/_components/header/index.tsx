'use client';

import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Button from '@/app/_components/button';
import SVGButton from '@/app/_components/button/svg-button';

import { APP_ROUTES } from '@/constants/routes';

export default function Header() {
	const router = useRouter();
	const { data: session, status } = useSession();

	const handleSign = () => {
		if (session?.user) {
			signOut();
			router.push(APP_ROUTES.MAIN);
			return;
		}

		router.push(APP_ROUTES.SIGN_IN);
	};

	return (
		<header className="h-header flex w-full items-center justify-between bg-white px-4 py-2 shadow-sm">
			<div className="item-center flex basis-1/3 gap-4">
				<SVGButton icon="menu" width={32} height={32} strokeWidth={2} />
				<span className="text-2xl">Linnnk</span>
			</div>
			{status !== 'loading' && (
				<div className="flex basis-1/3 justify-end">
					<Button size="sm" onClick={handleSign}>
						{!!session?.user ? '로그아웃' : '로그인'}
					</Button>
				</div>
			)}
		</header>
	);
}
