import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { PrivyClient } from '@privy-io/server-auth';

const prisma = new PrismaClient();
const privy = new PrivyClient(
  process.env.PRIVY_APP_ID!,
  process.env.PRIVY_APP_SECRET!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId } = body;

    if (!userId || typeof userId !== 'string') {
      return NextResponse.json({ error: 'Invalid or missing userId' }, { status: 400 });
    }

    // Get user data from Privy
    const privyUser = await privy.getUser(userId);
    if (!privyUser) {
      return NextResponse.json({ error: 'User not found in Privy' }, { status: 404 });
    }

    // Log full Privy user data for debugging
    console.log('Privy user data:', JSON.stringify(privyUser, null, 2));

    // Extract email
    const email =
      (privyUser.email && typeof privyUser.email === 'object' && privyUser.email.address) || // Email from privyUser.email.address
      privyUser.linkedAccounts?.find((acc) => acc.type === 'email')?.address || // Email from linked accounts
      privyUser.google?.email || // Google auth email
      null;

    // Extract wallet address
    const walletAddress =
      privyUser.linkedAccounts?.find((acc) => acc.type === 'wallet')?.address ||
      null;

    // Type guard for name in linked accounts
    const hasName = (acc: typeof privyUser.linkedAccounts[number]): acc is typeof acc & { name: string } => {
      return 'name' in acc && typeof acc.name === 'string' && !!acc.name;
    };

    // Extract name
    const name =
      privyUser.google?.name ||
      privyUser.linkedAccounts?.find(hasName)?.name ||
      (email ? email.split('@')[0] : 'Anonymous');

    console.log('Extracted data:', { userId, email, walletAddress, name });

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

    return NextResponse.json({ message: 'User saved successfully', user });
  } catch (err) {
    console.error('Error saving user:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}