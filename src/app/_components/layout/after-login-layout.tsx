import FooterMenu from '@/app/_components/footer/footer-menu';
import AfterLoginHeader from '@/app/_components/header/after-login-header';

interface AfterLoginLayoutProps {
	children: React.ReactNode;
}

export default function AfterLoginLayout({ children }: AfterLoginLayoutProps) {
	return (
		<>
			<AfterLoginHeader />
			<main>
				<section className="h-screen-except-header-and-footer-menu p-6">{children}</section>
				<FooterMenu />
			</main>
		</>
	);
}
