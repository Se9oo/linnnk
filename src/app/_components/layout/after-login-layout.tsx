import AfterLoginHeader from '@/app/_components/header/after-login-header';
import FooterMenu from '@/app/_components/menu/footer-menu';

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
