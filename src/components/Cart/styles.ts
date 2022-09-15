import { styled } from '../../styles';
import * as Dialog from '@radix-ui/react-dialog';

export const CartModal = styled('div', {
  backgroundColor: 'blue',
  height: '100vh',
});

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  right: 0,
  top: 0,
  width: '30rem',
  height: '100vh',
  backgroundColor: '$gray800',
});
