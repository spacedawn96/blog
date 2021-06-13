import { ThemeProvider } from 'next-themes';

import '../assets/main.css';
import 'tailwindcss/tailwind.css';
import 'typeface-open-sans';
import 'typeface-merriweather';
import '../assets/global.css';
import SelectContextProvider from '../lib/context';

export default function MyApp({ Component, pageProps }) {
  return (
    <SelectContextProvider>
      <ThemeProvider defaultTheme="system" enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </SelectContextProvider>
  );
}
