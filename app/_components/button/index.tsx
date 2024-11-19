import { ButtonHTMLAttributes, ReactNode } from 'react';

import cn from '@/utils/cn';

type Theme = 'primary' | 'outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	className?: string;
	theme?: Theme;
}

export default function Button({ type = 'button', theme = 'primary', children, className }: ButtonProps) {
	const buttonTheme: Record<Theme, string> = {
		primary: 'bg-primary hover:bg-primary-hover active:bg-primary-active text-white',
		outline: 'text-primary border-primary active:bg-primary border bg-white active:text-white',
	};

	return (
		<button type={type} className={cn('rounded-md px-4 py-2 transition-colors', buttonTheme[theme], className)}>
			{children}
		</button>
	);
}
