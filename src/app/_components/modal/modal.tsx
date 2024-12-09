'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import BackDrop from '@/app/_components/modal/back-drop';

import { useActiveModals, useModalActions } from '@/stores/modal';

export default function Modal() {
	const pathname = usePathname();

	const activeModals = useActiveModals();
	const { clearActiveModals } = useModalActions();

	useEffect(() => {
		clearActiveModals();
	}, [pathname]);

	if (activeModals.length === 0) return null;

	return createPortal(
		<>
			<BackDrop />
			{activeModals.map((modal) => (
				<div key={modal.id}>{modal.component}</div>
			))}
		</>,
		document.body,
	);
}
