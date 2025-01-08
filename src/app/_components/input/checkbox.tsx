import { HTMLAttributes } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

import cn from '@/utils/cn';

interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
	id: string;
	value?: string | number;
	name: string;
	options?: RegisterOptions;
}

export default function Checkbox({ id, value = '', name, className, options, ...rest }: CheckboxProps) {
	const formContext = useFormContext();

	// react-hook-form register
	const register = formContext && id ? { ...formContext.register(id) } : undefined;

	return (
		<label className="inline-flex cursor-pointer items-center">
			<div className="relative mr-2 flex items-center">
				<input
					type="checkbox"
					value={value}
					className={cn(
						'h-6 w-6 cursor-pointer appearance-none rounded-md border bg-white transition-colors checked:border-0 checked:bg-primary',
						className,
					)}
					{...register}
					{...rest}
				/>
				<span
					className="pointer-events-none absolute left-[50%] top-[50%] h-[6px] w-[12px] translate-x-[-50%] translate-y-[-50%] rotate-[-45deg]
						border-2 border-r-0 border-t-0 border-white"
				/>
			</div>
			<span>{name}</span>
		</label>
	);
}
