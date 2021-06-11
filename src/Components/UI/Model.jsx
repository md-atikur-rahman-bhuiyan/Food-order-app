import { Fragment } from "react";
import ReactDOM from "react-dom";
import Classes from "./Model.module.scss";

const Backdrop = (props) => {
  return <div className={Classes.backdrop} onClick={props.onClose}></div>;
};

const ModelOverlay = (props) => {
  return (
    <div className={Classes.modal}>
      <div className={Classes.content}>{props.children}</div>
    </div>
  );
};

// const portalElement1 = document.getElementById('root-overlay');
const modalRoot = document.getElementById("modal");

const Model = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, modalRoot)}
      {ReactDOM.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        modalRoot
      )}
    </Fragment>
  );
};

export default Model;
