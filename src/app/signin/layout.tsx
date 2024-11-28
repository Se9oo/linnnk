export default function Layout({ children }: { children: React.ReactNode }) {
	return <div className="h-screen-except-header flex items-center justify-center">{children}</div>;
}
