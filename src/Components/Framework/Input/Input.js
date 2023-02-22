import { forwardRef } from "react";
import classes from "./Input.module.css";
const Input = forwardRef((props, incomeRef) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} ref={incomeRef} />
      {/* id={props.input.id} */}
    </div>
  );
});
export default Input;
