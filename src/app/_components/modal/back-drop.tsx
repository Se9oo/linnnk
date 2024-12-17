import { HTMLAttributes } from 'react';

import { useActiveModals } from '@/stores/modal';

interface BackDropProps extends HTMLAttributes<HTMLDivElement> {}

export default function BackDrop({ children, onTransitionEnd }: BackDropProps) {
	const activeModals = useActiveModals();

	return (
		<div
			className={`fixed left-0 top-0 h-screen w-screen transform-gpu bg-back-drop transition-opacity duration-200
				${activeModals.length === 0 ? 'opacity-0' : 'animate-fade-in'}`}
			onTransitionEnd={onTransitionEnd}
		>
			{children}
		</div>
	);
}
