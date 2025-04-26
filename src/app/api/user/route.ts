import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { PrivyClient } from "@privy-io/server-auth";

const prisma = new PrismaClient();
const privy = new PrivyClient(
  process.env.PRIVY_APP_ID!,
  process.env.PRIVY_APP_SECRET!
);

export async function POST(req: Request) {
  try {
    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json({ error: 'Missing userId' }, { status: 400 });
    }

    // Get user data from Privy
    const privyUser = await privy.getUser(userId);

    // Log the entire user object to see its structure
    // console.log('Privy user data:', JSON.stringify(privyUser, null, 2));

    // Extract email from the first linked account that has an email
    // Type guard to check if the account has an email
    const hasEmail = (acc: typeof privyUser.linkedAccounts[number]): acc is typeof acc & { email: string } => {
      return 'email' in acc && typeof acc.email === 'string';
    };

    const email =
      privyUser?.linkedAccounts?.find(hasEmail)?.email ||
      privyUser?.google?.email ||
      null;


    // Extract wallet address if available
    const walletAddress =
      privyUser?.linkedAccounts?.find(acc => acc.type === 'wallet')?.address ||
      null;

    // Use name from Google account or create a display name
    const hasName = (acc: typeof privyUser.linkedAccounts[number]): acc is typeof acc & { name: string } => {
      return 'name' in acc && typeof acc.name === 'string';
    };
    
    const name = 
      privyUser?.google?.name ||
      privyUser?.linkedAccounts?.find(hasName)?.name ||
      (email ? email.split('@')[0] : 'Anonymous');
    
    console.log('Extracted data:', { email, walletAddress, name });

    // Save or update in database
    const user = await prisma.user.upsert({
      where: { privyId: userId },
      update: {
        email,
        name,
        walletAddress,
      },
      create: {
        privyId: userId,
        email,
        name,
        walletAddress,
      },
    });

    return NextResponse.json({ message: 'User saved', user });
  } catch (err) {
    console.error('Error saving user:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}