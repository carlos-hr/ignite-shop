export enum CartActionTypes {
  addCartItem = 'ADD_CART_ITEM',
  removeCartItem = 'REMOVE_CART_ITEM',
}

export function addCartItemAction(id: string) {
  return {
    type: CartActionTypes.addCartItem,
    payload: {
      id,
    },
  };
}

export function removeCartItemAction(id: string) {
  return {
    type: CartActionTypes.removeCartItem,
    payload: {
      id,
    },
  };
}
