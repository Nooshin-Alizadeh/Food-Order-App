import { Fragment } from "react";
import classes from "./Header.module.css";
import mealimg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealimg} alt="a table......" />
      </div>
    </Fragment>
  );
}; //onShowCart
export default Header;
