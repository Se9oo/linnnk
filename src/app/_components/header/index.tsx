interface HeaderProps {
	children?: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
	return (
		<header className="flex h-header w-full items-center justify-between bg-white px-4 py-2 shadow-sm">
			<span className="text-2xl">Linnnk</span>
			{children}
		</header>
	);
}
