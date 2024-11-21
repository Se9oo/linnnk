import { InputHTMLAttributes } from 'react';

import cn from '@/utils/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	title?: string;
}

interface InputContainerProps {
	children: React.ReactNode;
	className?: string;
}

function Container({ children, className }: InputContainerProps) {
	return <div className={cn('mt-4', className)}>{children}</div>;
}

function InputMain({ id, type = 'text', title, className, placeholder, ...rest }: InputProps) {
	return (
		<div>
			{title && (
				<label htmlFor={id} className="block py-[6px] font-medium text-gray-600">
					{title}
				</label>
			)}
			<input
				id={id}
				type={type}
				placeholder={placeholder}
				className={cn(
					`shadow-input active:shadow-input-focus hover:shadow-input-focus focus:shadow-input-focus h-12 w-full rounded-lg px-4
					outline-none transition-shadow`,
					'read-only:pointer-events-none read-only:bg-gray-50',
					className,
				)}
				{...rest}
			/>
		</div>
	);
}

export const Input = Object.assign(InputMain, {
	Container,
});
