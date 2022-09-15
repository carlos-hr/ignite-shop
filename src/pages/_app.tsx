import { AppProps } from 'next/app';
import { globalStyles } from '../styles/global';
import { Container, Header } from '../styles/pages/app';
import Image from 'next/future/image';
import logoImg from '../assets/logo.svg';
import Link from 'next/link';
import { Cart } from '../components/Cart';
import { CartContextProvider } from '../context/CartContext';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Container>
        <Header>
          <Link href="/" prefetch={false}>
            <a>
              <Image src={logoImg} alt="" />
            </a>
          </Link>
          <Cart />
        </Header>
        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  );
}
