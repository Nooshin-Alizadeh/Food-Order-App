import { createContext } from "react";

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  //allow upudate that context
  addItem: () => {},
  removeItem: (id) => {},
});

export default CartContext;
