import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import ModalPrtal from "../Framework/Modal/Modal-Portal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((c) => (
        <CartItem
          key={c.id}
          name={c.name}
          amount={c.amount}
          price={c.price}
          onRemove={cartItemRemoveHandler.bind(null, c.id)}
          onAdd={cartItemAddHandler.bind(null, c)}
        />
      ))}
    </ul>
  );
  return (
    <ModalPrtal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItem && <button className={classes["button"]}>Order</button>}
      </div>
    </ModalPrtal>
  );
};
export default Cart;
