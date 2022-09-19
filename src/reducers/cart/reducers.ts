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
          });

          return;
        }

        return state;
      }

      case CartActionTypes.removeCartItem: {
        const {
          payload: { id },
        } = action;

        const productInCartIndex = state.cart.findIndex(
          (product) => product.id === id
        );

        if (productInCartIndex >= 0) {
          draft.cart = state.cart.filter((cartItem) => cartItem.id !== id);
          return;
        }

        return state;
      }
      default:
        return state;
    }
  });
}
