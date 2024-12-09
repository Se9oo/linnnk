export default function Layout({ children }: { children: React.ReactNode }) {
	return <main className="flex h-screen-except-header items-center justify-center">{children}</main>;
}
