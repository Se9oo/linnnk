import { HTTP } from '@/libs/ky';

import { Tables } from '@/types/supabase';

export const AuthAPI = {
	checkExistUser: async ({ socialKey, socialType }: SocialInfo) => {
		return await HTTP.get<Tables<'user'>[]>(
			`/api/user/check-exist-user?socialKey=${socialKey}&socialType=${socialType}`,
		);
	},

	signUpUser: async (params: SignUpUserParams) => {
		return await HTTP.post<null, SignUpUserParams>(`api/user`, params);
	},
};
