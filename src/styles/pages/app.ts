import { styled } from '..';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'start',
  minHeight: '100vh',
});

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',

  '.Toastify__toast': {
    backgroundColor: '$gray800',
  },

  a: {
    cursor: 'pointer',
  },

  button: {
    backgroundColor: '$gray800',
    height: '3rem',
    width: '3rem',
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 0,
    cursor: 'pointer',
    transition: 'all 0.2s',

    '&:hover': {
      opacity: 0.6,
    },
  },
});
