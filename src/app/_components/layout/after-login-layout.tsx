import FooterMenu from '@/app/_components/menu/footer-menu';

interface AfterLoginLayoutProps {
	children: React.ReactNode;
}

export default function AfterLoginLayout({ children }: AfterLoginLayoutProps) {
	return (
		<>
			<div className="h-screen-except-header-and-footer-menu p-6">{children}</div>
			<FooterMenu />
		</>
	);
}
