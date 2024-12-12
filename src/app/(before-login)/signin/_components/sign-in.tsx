'use client';

import { SignInOptions, signIn } from 'next-auth/react';

import Button from '@/app/_components/button';

import { APP_ROUTES } from '@/constants/routes';

export default function SignIn() {
	const signInOption: SignInOptions = { redirect: true, redirectTo: APP_ROUTES.HOME };

	return (
		<div className="mx-auto w-full max-w-[420px] p-6">
			<p className="mb-8 text-center text-4xl">Linnnk</p>
			<Button
				className="relative w-full bg-[#FEE500] font-medium text-black hover:bg-[#FEE500] active:bg-[#FEE500]"
				onClick={() => signIn('kakao', signInOption)}
			>
				<img src="/assets/images/kakao-symbol.png" alt="kakao symbol" className="absolute h-7" />
				<span className="">Sign in with Kakao</span>
			</Button>
			<Button
				className="relative mt-2 w-full border bg-white text-black hover:bg-white active:bg-white"
				onClick={() => signIn('google', signInOption)}
			>
				<img src="/assets/images/google-symbol.svg" alt="google symbol" className="absolute h-7" />
				<span>Sign in with Google</span>
			</Button>
			<Button
				className="relative mt-2 w-full bg-black font-medium text-white hover:bg-black active:bg-black"
				onClick={() => signIn('kakao', signInOption)}
			>
				<img src="/assets/images/github-symbol.png" alt="github symbol" className="absolute h-7" />
				<span>Sign in with Github</span>
			</Button>
		</div>
	);
}
