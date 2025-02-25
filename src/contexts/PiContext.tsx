
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

interface PiContextType {
  authenticated: boolean;
  username: string | null;
  accessToken: string | null;
  signIn: () => Promise<void>;
  signOut: () => void;
}

const PiContext = createContext<PiContextType | undefined>(undefined);

export function PiProvider({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    // Initialize Pi SDK
    window.Pi.init({ version: "2.0", sandbox: true }); // Set sandbox: false for production
  }, []);

  const signIn = async () => {
    try {
      const auth = await window.Pi.authenticate(['username'], {
        onIncompletePaymentFound: function(payment: any) {
          // Handle incomplete payment
          console.log('Incomplete payment found:', payment);
        }
      });
      
      setAuthenticated(true);
      setUsername(auth.user.username);
      setAccessToken(auth.accessToken);
      toast.success('Successfully connected to Pi Network');
    } catch (error) {
      console.error('Pi Network authentication error:', error);
      toast.error('Failed to connect to Pi Network');
    }
  };

  const signOut = () => {
    setAuthenticated(false);
    setUsername(null);
    setAccessToken(null);
    toast.info('Disconnected from Pi Network');
  };

  return (
    <PiContext.Provider value={{ authenticated, username, accessToken, signIn, signOut }}>
      {children}
    </PiContext.Provider>
  );
}

export const usePi = () => {
  const context = useContext(PiContext);
  if (context === undefined) {
    throw new Error('usePi must be used within a PiProvider');
  }
  return context;
};
