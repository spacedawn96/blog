import { AppProps } from 'next/app';
import './global.css';
// import '@/styles/global.css';
import SelectContextProvider from '../lib/context';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SelectContextProvider>
      <Component {...pageProps} />
    </SelectContextProvider>
  );
}
