import cart from '../../assets//cart.svg';
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
  const itensInCart = cartItemIds.length;

  const totalAmount = cartItemsData.reduce((acc, curr) => {
    acc += curr.price;
    return acc;
  }, 0);

  console.log(totalAmount);

  useEffect(() => {
    if (cartItemIds.length > 0) {
      axios
        .post('/api/cart', {
          ids: cartItemIds,
        })
        .then((res) => {
          const cartItems = res.data.map((item) => {
            console.log(item);
            return {
              imageUrl: item.images[0],
              name: item.name,
              price: item.default_price.unit_amount / 100,
              formatedPrice: new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(item.default_price.unit_amount / 100),
              priceId: item.default_price.id,
              id: item.id,
            };
          });
          setCartItemsData(cartItems);
        });
    }
    setCartItemsData([]);
  }, [cartItemIds]);

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Image src={cart} alt="cart-icon" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Content>
          <Dialog.Close>X</Dialog.Close>
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
                  <button onClick={() => removeProductFromCart(cartItem.id)}>
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

            <button>Finalizar compra</button>
          </CartDetails>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
