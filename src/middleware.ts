import { NextRequest, NextResponse } from 'next/server';
import { PrivyClient } from '@privy-io/server-auth';

export const config = {
  matcher: ['/dashboard/:path*', '/become-artist'],
};

export default async function middleware(req: NextRequest) {
  console.log('MIDDLEWARE RUNNING!', req.nextUrl.pathname);

  const { PRIVY_APP_ID, PRIVY_APP_SECRET } = process.env;
  if (!PRIVY_APP_ID || !PRIVY_APP_SECRET) {
    console.error('[Middleware] Missing Privy credentials');
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Get the privy-token cookie
  const token = req.cookies.get('privy-token')?.value;

  if (!token) {
    console.log('[Middleware] No token found, redirecting to home');
    // Update cookies to reflect auth state
    const response = NextResponse.redirect(new URL('/', req.url));
    response.cookies.set('isAuthenticated', 'false');
    return response;
  }

  try {
    const client = new PrivyClient(PRIVY_APP_ID, PRIVY_APP_SECRET);
    const verifiedToken = await client.verifyAuthToken(token);
    console.log('[Middleware] Token verified:', verifiedToken);

    // Access the userId property
    const userId = verifiedToken.userId;
    console.log('[Middleware] User ID:', userId);

    // Set auth cookies
    const response = NextResponse.next();
    response.cookies.set('isAuthenticated', 'true');
    response.cookies.set('userId', userId);
    return response;
  } catch (err) {
    console.error('[Middleware] Invalid token:', err);
    const response = NextResponse.redirect(new URL('/', req.url));
    response.cookies.set('isAuthenticated', 'false');
    return response;
  }
}
