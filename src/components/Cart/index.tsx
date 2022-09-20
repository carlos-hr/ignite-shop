import cart from '../../assets/cart.svg';
import Image from 'next/future/image';
import * as Dialog from '@radix-ui/react-dialog';
import {
  CartDetails,
  CartItem,
  Content,
  ImageContainer,
  ProductDetails,
} from './styles';
import { useCart } from '../../hooks/useCart';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { formatPrice } from '../../utils/formatter';
import Stripe from 'stripe';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ProductData {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  priceId: string;
  formatedPrice: string;
}

export function Cart() {
  const { cartItemIds, removeProductFromCart } = useCart();
  const [cartItemsData, setCartItemsData] = useState<ProductData[]>([]);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const itensInCart = cartItemIds.length;
  const pricesListId = cartItemsData.map((cartItem) => {
    return {
      price: cartItem.priceId,
      quantity: 1,
    };
  });

  const totalAmount = cartItemsData.reduce((acc, curr) => {
    acc += curr.price;
    return acc;
  }, 0);

  useEffect(() => {
    if (cartItemIds.length > 0) {
      axios
        .post('/api/cart', {
          ids: cartItemIds,
        })
        .then((res) => {
          const cartItems = res.data.map((item: Stripe.Product) => {
            const price = item.default_price as Stripe.Price;

            return {
              imageUrl: item.images[0],
              name: item.name,
              price: price.unit_amount / 100,
              formatedPrice: new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(price.unit_amount / 100),
              priceId: price.id,
              id: item.id,
            };
          });
          setCartItemsData(cartItems);
        });
    } else if (cartItemIds.length === 0) {
      setCartItemsData([]);
    }
  }, [cartItemIds]);

  async function handleBuyProduct() {
    try {
      setIsRedirecting(true);
      const response = await axios.post('/api/checkout', {
        priceIds: pricesListId,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (error) {
      setIsRedirecting(false);
      console.log('er', error);
    }
  }

  return (
    <Dialog.Root>
      <ToastContainer
        newestOnTop={true}
        closeOnClick
        draggable
        autoClose={5000}
        rtl={false}
      />
      <Dialog.Trigger>
        <Image src={cart} alt="cart-icon" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Content>
          <Dialog.Close>X</Dialog.Close>
          {cartItemIds.length > 0 ? (
            <>
              <div>
                <Dialog.Title>Sacola de compras</Dialog.Title>
                {cartItemsData.map((cartItem) => (
                  <CartItem key={cartItem.id}>
                    <ImageContainer>
                      <Image
                        alt=""
                        width={94.79}
                        height={94.79}
                        src={cartItem.imageUrl}
                      />
                    </ImageContainer>
                    <ProductDetails>
                      <h2>{cartItem.name}</h2>
                      <span>{cartItem.formatedPrice}</span>
                      <button
                        onClick={() => removeProductFromCart(cartItem.id)}
                      >
                        Remover
                      </button>
                    </ProductDetails>
                  </CartItem>
                ))}
              </div>

              <CartDetails>
                <span className="quantity">
                  Quantidade
                  <p>{itensInCart} itens</p>
                </span>

                <span className="total">
                  Valor total
                  <p>{formatPrice(totalAmount)}</p>
                </span>

                <button disabled={isRedirecting} onClick={handleBuyProduct}>
                  Finalizar compra
                </button>
              </CartDetails>
            </>
          ) : (
            <Dialog.Title>Carrinho vazio</Dialog.Title>
          )}
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
