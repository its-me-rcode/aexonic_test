import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
} from 'react';

type CartProps = {
  cartData: any;
  setCartData: Dispatch<SetStateAction<any>>;
};

export const CartDetailsContext = createContext<CartProps>({
  cartData: [{}],
  setCartData: () => {},
});

export const useCartDetailsContext = () =>
  useContext(CartDetailsContext);
