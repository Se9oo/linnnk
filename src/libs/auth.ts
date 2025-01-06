import NextAuth from 'next-auth';
import github from 'next-auth/providers/github';
import google from 'next-auth/providers/google';
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
		github({
			clientId: process.env.GITHUB_CLIENT_ID!,
			clientSecret: process.env.GITHUB_CLIENT_SECRET!,
		}),
		google({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
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
				const response = await AuthAPI.checkExistUser({
					socialKey: providerAccountId,
					socialType: provider as SocialCompanies,
				});

				if (!response) {
					return APP_ROUTES.SIGN_IN_ERROR;
				}

				// 기존 회원이 아니라면 회원가입
				if (response.length === 0) {
					await AuthAPI.signUpUser({
						userName: name || '',
						socialKey: providerAccountId,
						socialType: provider as SocialCompanies,
					});
				}

				return true;
			} catch (err) {
				return APP_ROUTES.SIGN_IN_ERROR;
			}
		},
		async jwt({ token, user, account }) {
			if (account) {
				token.provider = account.provider;
			}

			return { ...token, ...user };
		},

		async session({ session, token }) {
			session.user = token as any;
			return session;
		},
	},
});
