import Image from 'next/future/image';
import { HomeContainer, Product } from '../styles/pages/home';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { stripe } from '../lib/stripe';
import { GetStaticProps } from 'next';
import Stripe from 'stripe';
import Link from 'next/link';
import Head from 'next/head';
import cart from '../assets/footer-cart.svg';
import { useCart } from '../hooks/useCart';

interface ProductData {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
}

interface HomeProps {
  products: ProductData[];
}

export default function Home({ products }: HomeProps) {
  const { addProductToCart } = useCart();
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.6,
      spacing: 48,
    },
  });

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <Product className="keen-slider__slide" key={product.id}>
            <Link href={`/product/${product.id}`} prefetch={false}>
              <Image
                src={product.imageUrl}
                width={520}
                height={480}
                alt=""
                priority
              />
            </Link>
            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
              <button onClick={() => addProductToCart(product.id)}>
                <Image src={cart} alt="cart-icon" />
              </button>
            </footer>
          </Product>
        ))}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2hours
  };
};
