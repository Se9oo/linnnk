'use client';

import { useSession } from 'next-auth/react';

import AccoutAction from '@/app/_components/account/account-action';

import { useModalActions } from '@/stores/modal';

export default function AccountButton() {
	const { data: session } = useSession();

	const { openModal } = useModalActions();

	return (
		<button
			type="button"
			onClick={() => openModal({ modalContent: <AccoutAction /> })}
			className="flex flex-col items-center justify-center"
		>
			<div className="h-9 w-9 rounded-full bg-gray-200">
				{session?.user?.image && <img src={session.user.image} className="h-9 w-9 rounded-full" alt="profile" />}
			</div>
		</button>
	);
}
