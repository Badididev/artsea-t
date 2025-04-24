'use client';

import { usePrivy } from '@privy-io/react-auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  // const { ready, authenticated } = usePrivy();
  // const router = useRouter();

  // useEffect(() => {
  //   if (ready && !authenticated) {
  //     router.push('/'); // redirect to login page
  //   }
  // }, [ready, authenticated, router]);

  // if (!ready || !authenticated) {
  //   return <div>Loading...</div>; // Show a spinner or loading screen
  // }

  return <>{children}</>;
}
