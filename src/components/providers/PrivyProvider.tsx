import { PrivyProvider as Provider } from '@privy-io/react-auth';
import { useRouter } from 'next/navigation';

interface PrivyProviderProps {
  children: React.ReactNode;
}

export function PrivyProvider({ children }: PrivyProviderProps) {
  const router = useRouter();

  return (
    <Provider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ''}
      // onSuccess={() => router.push('/dashboard')}
      config={{
        loginMethods: ['email', 'google'],
        
        appearance: {
          theme: 'light',
          accentColor: '#4F46E5', // indigo-600
          showWalletLoginFirst: false,
          // defaultWalletLocation: 'modal',
          // walletList: ['metamask', 'coinbase_wallet', 'wallet_connect'],
          // variables: {
          //   fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          //   borderRadius: '0.5rem',
          // }
        },
        
      }}
    >
      {children}
    </Provider>
  );
}