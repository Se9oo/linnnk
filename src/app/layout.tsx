import type { Metadata } from 'next';

import AuthSession from '@/app/_components/auth/auth-session';
import Header from '@/app/_components/header';
import { pretendard } from '@/app/_font';

import '../../public/globals.css';

export const metadata: Metadata = {
	title: 'linnnk',
	description: 'link community app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko" className={`${pretendard.variable}`}>
			<body className={`${pretendard.className} antialiased`}>
				<main>
					<Header />
					<AuthSession>{children}</AuthSession>
				</main>
			</body>
		</html>
	);
}
