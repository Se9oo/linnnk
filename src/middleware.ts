import { auth } from '@/libs/auth';
import { NextRequest, NextResponse } from 'next/server';

import { APP_ROUTES } from '@/constants/routes';

export async function middleware(request: NextRequest) {
	const session = await auth();

	if (!session) {
		return NextResponse.redirect(new URL(APP_ROUTES.SIGN_IN, request.url));
	}
}

export const config = {
	matcher: ['/home', '/link', '/link-list', '/my-page'],
};
