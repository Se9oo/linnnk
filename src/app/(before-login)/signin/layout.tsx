import BeforeLoginHeader from '@/app/_components/header/before-login-header';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<BeforeLoginHeader />
			<main className="flex h-screen-except-header items-center justify-center">{children}</main>;
		</>
	);
}
