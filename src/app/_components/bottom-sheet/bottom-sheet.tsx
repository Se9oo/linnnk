import { useEffect, useState } from 'react';

import SVGButton from '@/app/_components/button/svg-button';

import { useModalActions } from '@/stores/modal';

import cn from '@/utils/cn';

interface BottomSheetProps {
	children: React.ReactNode;
	className?: string;
}

export default function BottomSheet({ children, className }: BottomSheetProps) {
	const { closeModal } = useModalActions();

	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		setIsOpen(true);
	}, []);

	return (
		<div className="flex h-dvh w-full flex-col justify-end">
			<div
				className={cn(
					`h-[70%] w-full rounded-t-[60px] bg-white p-6 transition-transform duration-300
					${isOpen ? 'translate-y-0' : 'translate-y-[100%]'}`,
					className,
				)}
				onTransitionEnd={() => (!isOpen ? closeModal() : undefined)}
			>
				<div className="mb-4 flex w-full items-center justify-end">
					<SVGButton icon="x" width={40} height={40} onClick={() => setIsOpen(false)} />
				</div>
				{children}
			</div>
		</div>
	);
}
