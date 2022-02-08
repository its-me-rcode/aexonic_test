import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useState } from 'react';
import { CartDetailsContext } from '../context/CartDetailsContext';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const [cartData, setCartData] = useState<any>([]);
  return (
    <QueryClientProvider client={queryClient}>
      <CartDetailsContext.Provider value={{ cartData, setCartData }}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </CartDetailsContext.Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
