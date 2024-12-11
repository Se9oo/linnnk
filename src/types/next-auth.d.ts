import NextAuth from 'next-auth';
import { DefaultSession } from 'next-auth';

type SocialCompanies = 'kakao' | 'google' | 'github';

declare module 'next-auth' {
	interface Session {
		user: {
			id?: string;
			name?: string | null;
			email?: string | null;
			image?: string | null;
			provider?: string;
		};
	}
}
