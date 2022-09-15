import cart from '../../assets//cart.svg';
import Image from 'next/future/image';
import { useCart } from '../../hooks/useCart';
import * as Dialog from '@radix-ui/react-dialog';
import { CartModal, Content } from './styles';

export function Cart() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Image src={cart} alt="cart-icon" />

        <CartModal>
          <Dialog.Portal>
            <Content>
              <Dialog.Title>Sacola de compras</Dialog.Title>
              <Dialog.Close>X</Dialog.Close>
            </Content>
          </Dialog.Portal>
        </CartModal>
      </Dialog.Trigger>
    </Dialog.Root>
  );
}
