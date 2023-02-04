import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import '../styles/Navigation.scss';
import '../styles/Pokemon.scss';
import '../styles/cart.scss';
import '../styles/Title.scss';
import '../styles/NavBar.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
