'use client';

import { useSession } from 'next-auth/react';

import AccoutAction from '@/app/_components/menu/account-action';

import { useModalActions } from '@/stores/modal';

export default function AccountButton() {
	const { data: session, status } = useSession();

	const { openModal } = useModalActions();

	return (
		<button
			type="button"
			onClick={() => openModal({ modalContent: <AccoutAction /> })}
			className="flex w-full flex-col items-center justify-center"
		>
			<div className="mb-1 h-8 w-8 rounded-full bg-gray-200">
				{status === 'authenticated' && session.user?.image && (
					<img src={session.user.image} className="h-8 w-8 rounded-full" alt="profile" />
				)}
			</div>
			<span className="text-xs">계정</span>
		</button>
	);
}
