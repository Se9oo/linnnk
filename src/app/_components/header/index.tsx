'use client';

import { usePathname, useRouter } from 'next/navigation';

import Button from '@/app/_components/button';

import { APP_ROUTES } from '@/constants/routes';

export default function Header() {
	const router = useRouter();
	const pathname = usePathname();

	const handleSignIn = () => {
		router.push(APP_ROUTES.SIGN_IN);
	};

	return (
		<header className="flex h-header w-full items-center justify-between bg-white px-4 py-2 shadow-sm">
			<span className="text-2xl">Linnnk</span>
			{pathname === APP_ROUTES.MAIN && (
				<Button size="sm" onClick={handleSignIn}>
					로그인
				</Button>
			)}
		</header>
	);
}
