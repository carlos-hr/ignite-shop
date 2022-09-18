export interface CartItem {
  id: string;
  quantity: number;
}

export interface CartState {
  cart: CartItem[];
}

export interface ActionType {
  type: string;
  payload?: {
    id?: string;
  };
}
