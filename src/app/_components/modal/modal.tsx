'use client';

import { usePathname } from 'next/navigation';
import { TransitionEvent, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import BackDrop from '@/app/_components/modal/back-drop';

import { useActiveModals, useModalActions } from '@/stores/modal';

export default function Modal() {
	const pathname = usePathname();

	// modal state
	const activeModals = useActiveModals();
	const { clearActiveModals } = useModalActions();

	// modal rendering check
	const [showModal, setShowModal] = useState(false);

	// backdrop opacity animation 종료시 modal 닫기
	const handleBackDropTransition = (e: TransitionEvent) => {
		if (e.target === e.currentTarget && showModal) {
			setShowModal(false);
		}
	};

	// 경로 변경시 열려 있는 modal 초기화
	useEffect(() => {
		clearActiveModals();
	}, [pathname]);

	useEffect(() => {
		if (!showModal && activeModals.length > 0) {
			setShowModal(true);
		}
	}, [activeModals]);

	if (!showModal && activeModals.length === 0) return null;

	return createPortal(
		<BackDrop onTransitionEnd={handleBackDropTransition}>
			{activeModals.map((modal) => (
				<div key={modal.id}>{modal.component}</div>
			))}
		</BackDrop>,
		document.body,
	);
}
