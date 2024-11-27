import localFont from 'next/font/local';

export const pretendard = localFont({
	display: 'swap',
	variable: '--font-pretendard',
	src: [
		{
			path: '../../public/fonts/pretendard/woff2/Pretendard-Light.subset.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../../public/fonts/pretendard/woff2/Pretendard-Regular.subset.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/pretendard/woff2/Pretendard-Medium.subset.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../public/fonts/pretendard/woff2/Pretendard-SemiBold.subset.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../../public/fonts/pretendard/woff2/Pretendard-Bold.subset.woff2',
			weight: '700',
			style: 'normal',
		},
	],
});
