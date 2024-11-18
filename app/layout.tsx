import type { Metadata } from 'next';
import '@/public/globals.css';
import { pretendard } from '@/app/_font';

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
			<body className={`${pretendard.className} antialiased`}>{children}</body>
		</html>
	);
}
