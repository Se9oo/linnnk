import cn from '@/utils/cn';

interface CenterContainerProps {
	children: React.ReactNode;
	className?: string;
}

export default function CenterContainer({ children, className }: CenterContainerProps) {
	return <div className={cn('flex h-dvh w-full items-center justify-center', className)}>{children}</div>;
}
