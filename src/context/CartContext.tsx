import { createContext, ReactNode, useState } from 'react';
import { toast } from 'react-toastify';

interface CartContextProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cartItemIds: string[];
  addProductToCart: (id: string) => void;
  removeProductFromCart: (id: string) => void;
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItemIds, setCartItemIds] = useState([]);

  function addProductToCart(id: string) {
    const cartItemIndex = cartItemIds.findIndex(
      (productId) => productId === id
    );

    if (cartItemIndex === -1) {
      setCartItemIds((state) => [...state, id]);
      toast.success('Produto adicionado ao carrinho!', {
        theme: 'dark',
      });

      return;
    }

    toast.error('O produto já está no carrinho! ', {
      theme: 'dark',
    });
  }

  function removeProductFromCart(id: string) {
    const cartItemIndex = cartItemIds.findIndex(
      (productId) => productId === id
    );

    if (cartItemIndex >= 0) {
      const newCart = cartItemIds.filter((productId) => productId !== id);
      setCartItemIds(newCart);
    }
    return;
  }

  return (
    <CartContext.Provider
      value={{ addProductToCart, cartItemIds, removeProductFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
