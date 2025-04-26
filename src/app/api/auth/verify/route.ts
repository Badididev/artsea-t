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
    return NextResponse.redirect(new URL('/', req.url));
  }

  try {
    const client = new PrivyClient(PRIVY_APP_ID, PRIVY_APP_SECRET);
    const verifiedToken = await client.verifyAuthToken(token);
    console.log('[Middleware] Token verified:', verifiedToken);

    // If token is valid, allow access
    return NextResponse.next();
  } catch (err) {
    console.error('[Middleware] Invalid token:', err);
    return NextResponse.redirect(new URL('/', req.url));
  }
}
