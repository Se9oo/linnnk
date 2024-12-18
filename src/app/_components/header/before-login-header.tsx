'use client';

import { usePathname, useRouter } from 'next/navigation';

import Button from '@/app/_components/button';
import Header from '@/app/_components/header';

import { APP_ROUTES } from '@/constants/routes';

export default function BeforeLoginHeader() {
	const router = useRouter();
	const pathname = usePathname();

	const handleSignIn = () => {
		router.push(APP_ROUTES.SIGN_IN);
	};

	return (
		<Header>
			{pathname === APP_ROUTES.MAIN && (
				<Button size="sm" onClick={handleSignIn}>
					로그인
				</Button>
			)}
		</Header>
	);
}
