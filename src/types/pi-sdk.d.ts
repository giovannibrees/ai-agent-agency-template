
interface PiNetwork {
  init: (options: { version: string; sandbox?: boolean }) => void;
  authenticate: (
    scopes: string[],
    options: {
      onIncompletePaymentFound: (payment: any) => void;
    }
  ) => Promise<{
    user: {
      username: string;
    };
    accessToken: string;
  }>;
}

declare global {
  interface Window {
    Pi: PiNetwork;
  }
}

export {};
