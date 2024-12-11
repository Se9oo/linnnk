'use client';

import { useSession } from 'next-auth/react';

import BottomSheet from '@/app/_components/bottom-sheet/bottom-sheet';
import Button from '@/app/_components/button';

export default function AccoutAction() {
	const { data: session } = useSession();

	return (
		<BottomSheet className="h-fit">
			<div className="flex gap-4">
				<img src={session?.user?.image || ''} alt="user image" className="h-fit w-20 rounded-full" />
				<div className="items-stretch">
					<span className="block text-2xl font-bold">{session?.user?.name}</span>
					<span className="mt-4 block font-semibold">연동된 서비스</span>
					<span>{session?.user?.provider}</span>
				</div>
			</div>
			<Button className="mt-10 w-full">로그아웃</Button>
		</BottomSheet>
	);
}
