import { AppProps } from 'next/app';
import './global.css';
// import '@/styles/global.css';
import SelectContextProvider from '../lib/context';
import React, { useEffect } from 'react';
// import 'prismjs/themes/prism-tomorrow.css';
// import './prism.css';
const prism = require('prismjs');
require('prismjs/components/prism-python');

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    prism.highlightAll();
  }, []);

  return (
    <SelectContextProvider>
      <Component {...pageProps} />
    </SelectContextProvider>
  );
}
