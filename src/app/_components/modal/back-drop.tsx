import { HTMLAttributes, MouseEvent, useRef } from 'react';

import { useActiveModals, useModalActions } from '@/stores/modal';

interface BackDropProps extends HTMLAttributes<HTMLDivElement> {}

export default function BackDrop({ children, onTransitionEnd }: BackDropProps) {
	const backDropRef = useRef<HTMLDivElement | null>(null);

	const activeModals = useActiveModals();
	const { closeModal } = useModalActions();

	const handleClickBackDrop = (e: MouseEvent<HTMLDivElement>) => {
		if (backDropRef.current && backDropRef.current === e.target) {
			closeModal();
		}
	};

	return (
		<div
			ref={backDropRef}
			className={`fixed left-0 top-0 h-screen w-screen transform-gpu bg-back-drop transition-opacity duration-150
				${activeModals.length === 0 ? 'opacity-0' : 'animate-fade-in'}`}
			onTransitionEnd={onTransitionEnd}
			onClick={(e) => handleClickBackDrop(e)}
		>
			{children}
		</div>
	);
}
