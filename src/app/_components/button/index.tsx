import { ButtonHTMLAttributes, ReactNode } from 'react';

import cn from '@/utils/cn';

type Theme = 'primary' | 'outline';
type Size = 'sm' | 'md';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	className?: string;
	theme?: Theme;
	size?: Size;
}

export default function Button({
	type = 'button',
	theme = 'primary',
	size = 'md',
	children,
	className,
	...rest
}: ButtonProps) {
	const buttonTheme: Record<Theme, string> = {
		primary: 'bg-primary hover:bg-primary-hover active:bg-primary-active text-white',
		outline: 'text-primary border-primary active:bg-primary border bg-white active:text-white',
	};

	const buttonSize: Record<Size, string> = {
		sm: 'laptop:text-base text-sm',
		md: 'laptop:text-lg h-12',
	};

	return (
		<button
			type={type}
			className={cn('rounded-lg px-4 py-2 transition-colors', buttonTheme[theme], buttonSize[size], className)}
			{...rest}
		>
			{children}
		</button>
	);
}
