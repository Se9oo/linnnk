import { type NextRequest, NextResponse } from 'next/server';

import { Tables } from '@/types/supabase';

import { supabase } from '@/supabase/supabaseClient';

export async function GET(request: NextRequest): Promise<NextResponse> {
	try {
		const searchParams = request.nextUrl.searchParams;

		const socialKey = searchParams.get('socialKey');
		const socialType = searchParams.get('socialType');

		if (!socialKey || !socialType) {
			return new NextResponse(JSON.stringify({ result: 'fail', message: 'empty params' }), {
				status: 500,
			});
		}

		const { data } = await supabase
			.from('user')
			.select('*')
			.eq('status', 1)
			.eq('social_key', socialKey)
			.eq('social_type', socialType)
			.returns<Tables<'user'>[]>();

		return new NextResponse(JSON.stringify(data), {
			status: 200,
		});
	} catch (err) {
		return new NextResponse(JSON.stringify({ result: 'fail', message: 'Internal Server Error' }), {
			status: 500,
		});
	}
}
