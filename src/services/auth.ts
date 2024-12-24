import { nanoid } from 'nanoid';

import { HTTP } from '@/libs/ky';

import { Tables } from '@/types/supabase';

import { supabase } from '@/supabase/supabaseClient';

export const AuthAPI = {
	checkExistUser: async ({ socialKey, socialType }: SocialInfo) => {
		return await HTTP.get<Tables<'user'>[]>(
			`/api/user/check-exist-user?socialKey=${socialKey}&socialType=${socialType}`,
		);
	},

	signUpUser: async ({ userName, socialKey, socialType }: SignUpUserParams) => {
		return await supabase.from('user').insert({
			id: nanoid(),
			user_name: userName,
			social_key: socialKey,
			social_type: socialType,
			status: 1,
		});
	},
};
