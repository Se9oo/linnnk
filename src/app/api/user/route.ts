import { nanoid } from 'nanoid';
import { NextRequest, NextResponse } from 'next/server';

import { supabase } from '@/supabase/supabaseClient';

export async function POST(request: NextRequest) {
	try {
		const { userName, socialKey, socialType } = await request.json();

		await supabase.from('user').insert({
			id: nanoid(),
			user_name: userName,
			social_key: socialKey,
			social_type: socialType,
			status: 1,
		});

		return NextResponse.json({
			status: 200,
		});
	} catch (err) {
		return NextResponse.json(
			{ result: 'fail', message: 'Internal Server Error' },
			{
				status: 200,
			},
		);
	}
}
