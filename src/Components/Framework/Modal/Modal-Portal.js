import { Fragment } from "react";
import ReactDOM, { createPortal } from "react-dom";
import classes from "./Modal.module.css";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const ModalPrtal = (props) => {
  return (
    <Fragment>
      {createPortal(<Backdrop {...props} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay> {props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}; //overlays
export default ModalPrtal;
