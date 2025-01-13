import cn from '@/utils/cn';

interface ChipProps {
	name: string;
	className?: string;
}

export default function Chip({ name, className }: ChipProps) {
	return (
		<span
			className={cn('bg-primary-light h-10 text-nowrap rounded-full px-4 py-2 font-semibold text-primary', className)}
		>
			{name}
		</span>
	);
}
