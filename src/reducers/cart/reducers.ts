import produce from 'immer';
import { ActionType, CartState } from '../../@types/cart';
import { CartActionTypes } from './actions';

export function cartReducers(state: CartState, action: ActionType) {
  return produce(state, (draft) => {
    switch (action.type) {
      case CartActionTypes.addCartItem: {
        const { id } = action.payload;

        const productInCartIndex = state.cart.findIndex(
          (product) => product.id === id
        );

        if (productInCartIndex === -1) {
          draft.cart.push({
            id,
            quantity: 1,
          });

          return;
        } else {
          draft.cart[productInCartIndex].quantity++;

          return;
        }
      }

      case CartActionTypes.removeCartItem: {
        const {
          payload: { id },
        } = action;

        const productInCartIndex = state.cart.findIndex(
          (product) => product.id === id
        );

        if (productInCartIndex >= 0) {
          if (draft.cart[productInCartIndex].quantity === 1) {
            draft.cart = state.cart.filter((cartItem) => cartItem.id !== id);
            return;
          } else {
            draft.cart[productInCartIndex].quantity--;
            return;
          }
        }

        return state;
      }
      default:
        return state;
    }
  });
}
