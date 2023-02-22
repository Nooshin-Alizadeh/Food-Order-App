import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../Store/cart-context";
const HeaderCartButton = (props) => {
  var cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((xCurNum, yItem) => {
    return xCurNum + yItem.amount;
  }, 0);
  const [btnHighLited, setBtnHighLited] = useState(false);
  const btnClassess = `${classes.button} ${btnHighLited ? classes.bump : ""}`;
  useEffect(() => {
    if (items.length == 0) return;
    setBtnHighLited(true);
    const timer = setTimeout(() => {
      setBtnHighLited(false);
    }, 300);
    return () => {
      //when componentb remolve
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClassess} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Card</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
