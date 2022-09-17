import { createContext, ReactNode, useReducer } from 'react';
import { CartState } from '../@types/cart';
import {
  addCartItemAction,
  removeCartItemAction,
} from '../reducers/cart/actions';
import { cartReducers } from '../reducers/cart/reducers';

interface CartContextProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cartState: CartState;
  addCartItem: (id: string) => void;
  removeCartItem: (id: string) => void;
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducers, {
    cart: [],
  });

  function addCartItem(id: string) {
    dispatch(addCartItemAction(id));
  }

  function removeCartItem(id: string) {
    dispatch(removeCartItemAction(id));
  }

  return (
    <CartContext.Provider value={{ addCartItem, cartState, removeCartItem }}>
      {children}
    </CartContext.Provider>
  );
}
