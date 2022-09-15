import cart from '../../assets//cart.svg';
import Image from 'next/future/image';
import { useCart } from '../../hooks/useCart';
import * as Dialog from '@radix-ui/react-dialog';
import { CartModal } from './styles';

export function Cart() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Image src={cart} alt="cart-icon" />

        <CartModal>
          <Dialog.Portal>
            <Dialog.Content>
              <Dialog.Title>Sacola de compras</Dialog.Title>
              <Dialog.Close>X</Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </CartModal>
      </Dialog.Trigger>
    </Dialog.Root>
  );
}
