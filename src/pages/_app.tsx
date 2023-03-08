import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import '@/styles/navigation.scss';
import '@/styles/pokemon.scss';
import '@/styles/cart.scss';
import '@/styles/title.scss';
import '@/styles/navBar.scss';
import '@/styles/myCart.scss';
import '@/styles/indexHome.scss';
import '@/styles/type.scss';
import '@/styles/item.scss';
import '@/styles/allPokemon.scss';

import { store } from '../app/store';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
