import { AppProps } from 'next/app';
import './global.css';
// import '@/styles/global.css';
import SelectContextProvider from '../lib/context';
import React, { useEffect } from 'react';
import 'prismjs/themes/prism-tomorrow.css';
// import './prism.css';
import Prism from 'prismjs';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll();
    }
  }, []);

  return (
    <SelectContextProvider>
      <Component {...pageProps} />
    </SelectContextProvider>
  );
}
