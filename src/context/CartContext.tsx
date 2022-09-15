import { createContext, ReactNode } from 'react';

export const CartContext = createContext({});

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  return <CartContext.Provider value="teste">{children}</CartContext.Provider>;
}
