import NextAuth from 'next-auth';
import kakao from 'next-auth/providers/kakao';

import { APP_ROUTES } from '@/constants/routes';

import { AuthAPI } from '@/services/auth';

export const {
	handlers: { GET, POST },
	auth,
	signIn,
} = NextAuth({
	pages: {
		signIn: APP_ROUTES.SIGN_IN,
	},
	providers: [
		kakao({
			clientId: process.env.KAKAO_CLIENT_ID!,
			clientSecret: process.env.KAKAO_CLIENT_SECRET!,
		}),
	],
	callbacks: {
		async signIn({ user, account }) {
			try {
				if (!account) {
					return APP_ROUTES.SIGN_IN_ERROR;
				}

				const { name } = user;

				// 사용자 고유 social id
				const { provider, providerAccountId } = account;

				// 기존 회원 여부 체크
				const { data, error } = await AuthAPI.checkExistUser({
					socialKey: providerAccountId,
					socialType: provider as SocialCompanies,
				});

				if (error || !data) {
					return APP_ROUTES.SIGN_IN_ERROR;
				}

				// 기존 회원이 아니라면 회원가입
				if (data.length === 0) {
					const { error } = await AuthAPI.signUpUser({
						userName: name || '',
						socialKey: providerAccountId,
						socialType: provider as SocialCompanies,
					});

					if (error) {
						return APP_ROUTES.SIGN_IN_ERROR;
					}
				}

				return true;
			} catch (err) {
				return APP_ROUTES.SIGN_IN_ERROR;
			}
		},
		async jwt({ token, user }) {
			return { ...token, ...user };
		},

		async session({ session, token }) {
			session.user = token as any;
			return session;
		},
	},
});
