import { cookies } from 'next/headers';
import { PrivyClient } from '@privy-io/server-auth';

if (!process.env.PRIVY_APP_ID || !process.env.PRIVY_APP_SECRET) {
  throw new Error('Missing required Privy environment variables');
}

// Initialize the Privy client with both app ID and secret
const privy = new PrivyClient(
  process.env.PRIVY_APP_ID,
  process.env.PRIVY_APP_SECRET
);

export async function getPrivyToken() {
  const cookieStore = await cookies(); // Added await here
  const token = cookieStore.get("privy-token")?.value ?? null;
  
  // Add logging for debugging
  console.log('[Auth] Token found:', token ? 'Yes' : 'No');
  
  return token;
}

export async function getPrivyUser() {
  const authToken = await getPrivyToken();
  
  if (!authToken) {
    console.log('[Auth] No token found, returning null');
    return null;
  }
  
  try {
    console.log('[Auth] Verifying token...');
    const verifiedUser = await privy.verifyAuthToken(authToken);
    console.log('[Auth] User verified successfully with ID:', verifiedUser.userId);
    return verifiedUser;
  } catch (error) {
    console.error("[Auth] Error verifying auth token:", error);
    return null;
  }
}

// Function to check authentication like the middleware
export async function checkAuthentication() {
  const authToken = await getPrivyToken();
  
  if (!authToken) {
    console.log('[Auth] No token found in checkAuthentication');
    return { authenticated: false };
  }
  
  try {
    console.log('[Auth] Verifying token in checkAuthentication...');
    const verifiedUser = await privy.verifyAuthToken(authToken);
    console.log('[Auth] User authenticated:', verifiedUser.id);
    return { 
      authenticated: true,
      user: verifiedUser
    };
  } catch (error) {
    console.error("[Auth] Authentication failed:", error);
    return { authenticated: false };
  }
}