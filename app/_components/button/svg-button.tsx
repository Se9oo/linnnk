'use client';

import SVGIcon, { SVGIconProps } from '@/app/_components/icon/svg-icon';

import cn from '@/utils/cn';

interface SVGButtonProps extends SVGIconProps {
	onButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function SVGButton({ icon, className, onButtonClick, ...rest }: SVGButtonProps) {
	return (
		<button onClick={onButtonClick}>
			<SVGIcon
				icon={icon}
				className={cn('rounded-md p-1 transition-colors hover:bg-gray-100 active:bg-gray-200', className)}
				{...rest}
			/>
		</button>
	);
}
