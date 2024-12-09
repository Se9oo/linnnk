import AfterLoginLayout from '@/app/_components/layout/after-login-layout';

interface AfterloginMainLayoutProps {
	children: React.ReactNode;
}

export default function AfterLoginMainLayout({ children }: AfterloginMainLayoutProps) {
	return <AfterLoginLayout>{children}</AfterLoginLayout>;
}
