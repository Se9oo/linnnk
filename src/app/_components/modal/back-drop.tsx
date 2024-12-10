interface BackDropProps {
	children: React.ReactNode;
}

export default function BackDrop({ children }: BackDropProps) {
	return <div className="fixed left-0 top-0 h-screen w-screen transform-gpu bg-back-drop">{children}</div>;
}
