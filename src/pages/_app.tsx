import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import '../styles/Navigation.scss';
import '../styles/Pokemon.scss';
import '../styles/cart.scss';
import '../styles/Title.scss';
import '../styles/NavBar.scss';

import { store } from '../app/store';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
