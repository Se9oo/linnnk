import { nanoid } from 'nanoid';

import { Tables } from '@/types/supabase';

import { supabase } from '@/supabase/supabaseClient';

export const AuthAPI = {
	getUserList: async () => {
		return await supabase.from('user').select('*').eq('status', 1).returns<Tables<'user'>[]>();
	},

	checkExistUser: async ({ socialKey, socialType }: SocialInfo) => {
		return await supabase
			.from('user')
			.select('*')
			.eq('status', 1)
			.eq('social_key', socialKey)
			.eq('social_type', socialType)
			.returns<Tables<'user'>[]>();
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
