import { useReducer } from "react";
import CartContext from "./cart-context";
const cartDefaultState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(
      (it) => it.id == action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItem;
    let updatedItems;
    if (existingCartItem) {
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // updatedItem={...action.item};
      updatedItems = state.items.concat(action.item);
    }
    // const updatedItems = state.items.concat(action.item);

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existIndex = state.items.findIndex((it) => it.id == action.id);
    const existitem = state.items[existIndex];
    const updatedtotalamount = state.totalAmount - existitem.price;
    let updatedItems;
    if (existitem.amount == 1) {
      updatedItems = state.items.filter((it) => it.id != action.id);
    } else {
      const updateditem = { ...existitem, amount: existitem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existIndex] = updateditem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedtotalamount,
    };
  }

  return cartDefaultState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    cartDefaultState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
