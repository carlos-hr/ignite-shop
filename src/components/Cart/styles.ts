import { styled } from '../../styles';
import * as Dialog from '@radix-ui/react-dialog';

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  right: 0,
  top: 0,
  width: '30rem',
  height: '100vh',
  backgroundColor: '$gray800',
  padding: '3rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '>button': {
    position: 'fixed',
    right: 0,
    top: 0,
    fontSize: '$lg',
    background: 'transparent',
    border: 0,
    padding: '1.25rem',
    color: '$gray300',
    cursor: 'pointer',
  },
});

export const CartItem = styled('div', {
  display: 'flex',
  gap: '1.25rem',
  marginTop: '2.5rem',
  height: 93,
});

export const ImageContainer = styled('div', {
  width: 100,
  height: 93,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  height: '100%',
  alignItems: 'flex-start',

  h2: {
    color: '$gray300',
    fontSize: '$md',
    fontWeight: 400,
  },

  span: {
    fontSize: '$md',
    color: '$white',
    fontWeight: 'bold',
  },

  button: {
    background: 'transparent',
    border: 0,
    color: '$green300',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

export const CartDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  span: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '$gray100',
  },

  '.quantity': {
    fontSize: '1rem',
  },

  '.total': {
    fontWeight: 'bold',
    fontSize: '$md',
    marginTop: '0.5rem',
    marginBottom: '3.5rem',
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },
  },
});
