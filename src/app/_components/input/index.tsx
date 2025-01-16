import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

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
	const formContext = useFormContext();

	// react-hook-form register
	const register = formContext && id ? { ...formContext.register(id) } : undefined;
	const error = id ? formContext.formState.errors[id] : undefined;

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
					`h-12 w-full rounded-lg px-4 shadow-input outline-none transition-shadow hover:shadow-input-focus
					focus:shadow-input-focus active:shadow-input-focus`,
					'read-only:pointer-events-none read-only:bg-gray-50',
					`${error?.message && 'shadow-input-error hover:shadow-input-error focus:shadow-input-error active:shadow-input-error'}`,
					className,
				)}
				{...rest}
				{...register}
			/>
			{error?.message && <span className="text-error mt-2 block">{error.message.toString()}</span>}
		</div>
	);
}

export const Input = Object.assign(InputMain, {
	Container,
});
