import { NextRequest, NextResponse } from 'next/server';
import { PrivyClient } from '@privy-io/server-auth';

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/profile',
    '/products'
  ],
};

export default async function middleware(req: NextRequest) {

  console.log('MIDDLEWARE RUNNING!', req.nextUrl.pathname);
  
  
  
  // Add this to see it always in dev
 
  
  console.log('[Auth Middleware] Checking token...');
  const token = req.cookies.get('privy-token')?.value;
  
  if (!token) {
    console.log('[Auth Middleware] No token found, redirecting to home');
    return NextResponse.redirect(new URL('/', req.url));
  }
  
  console.log('[Auth Middleware] Token found, verifying...');
  const { PRIVY_APP_ID, PRIVY_APP_SECRET } = process.env;
  
  if (!PRIVY_APP_ID || !PRIVY_APP_SECRET) {
    console.error('[Auth Middleware] Missing Privy credentials');
    return NextResponse.next();
  }
  
  try {
    const client = new PrivyClient(PRIVY_APP_ID, PRIVY_APP_SECRET);
    await client.verifyAuthToken(token);
    console.log('[Auth Middleware] Token verified, proceeding');
    return NextResponse.next();
  } catch (err) {
    console.error('[Auth Middleware] Auth failed:', err);
    return NextResponse.redirect(new URL('/', req.url));
  }
}

