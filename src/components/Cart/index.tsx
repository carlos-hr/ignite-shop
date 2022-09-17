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

export function Cart() {
  const { addCartItem, removeCartItem } = useCart();

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
            <CartItem>
              <ImageContainer>
                <Image
                  alt=""
                  width={94.79}
                  height={94.79}
                  src="https://files.stripe.com/links/MDB8YWNjdF8xTGhGeXRBZVFMRWgyb0R2fGZsX3Rlc3RfbUhrN1JZa0xvaEl3c3h1Ym9Edk9ZN25600Dj51JHjE"
                />
              </ImageContainer>
              <ProductDetails>
                <h2>Camiseta Beyond the Limits</h2>
                <span>
                  R$79,90
                  <p>
                    <button
                      onClick={() => removeCartItem('prod_MQ7NaefPljw2C7')}
                    >
                      -
                    </button>{' '}
                    2 un <button>+</button>
                  </p>
                </span>
                <button>Remover</button>
              </ProductDetails>
            </CartItem>
          </div>

          <CartDetails>
            <span className="quantity">
              Quantidade
              <p> 3 itens</p>
            </span>

            <span className="total">
              Valor total
              <p>RS 270,00</p>
            </span>

            <button>Finalizar compra</button>
          </CartDetails>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
