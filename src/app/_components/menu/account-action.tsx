'use client';

import { signOut, useSession } from 'next-auth/react';

import BottomSheet from '@/app/_components/bottom-sheet/bottom-sheet';
import Button from '@/app/_components/button';

export default function AccoutAction() {
	const { data: session } = useSession();

	const userImage = session?.user.image;
	const provider = session?.user.provider;
	const username = session?.user.name;

	const handleSignOut = () => {
		signOut();
	};

	return (
		<BottomSheet className="h-fit">
			<div className="flex gap-4">
				<img src={userImage || ''} alt="user image" className="h-fit w-20 rounded-full" />
				<div className="items-stretch">
					<span className="block text-2xl font-bold">{username}</span>
					<span className="mt-4 block font-semibold">연동된 서비스</span>
					<div className="mt-2 flex items-center gap-2">
						<img
							src={`/assets/images/${provider}-symbol.${provider === 'kakao' ? 'png' : 'svg'}`}
							alt="provider symbol"
							className="w-5"
						/>
						<span>{provider}</span>
					</div>
				</div>
			</div>
			<Button className="mt-10 w-full" onClick={handleSignOut}>
				로그아웃
			</Button>
		</BottomSheet>
	);
}
