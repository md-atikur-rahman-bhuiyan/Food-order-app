import { useContext, useEffect, useState } from "react";
import CartContext from "../../Store/cart-context";
import CartIcon from "../../Components/Cart/CartIcon";
import Classes from "./HeaderCartButton.module.scss";

const HeaderCartButton = (props) => {
  const [buttonHighlited, setHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const NumberofCartItem = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${Classes.button} ${buttonHighlited ? Classes.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setHighlighted(true);

    const timer = setTimeout(() => {
      setHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={Classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={Classes.badge}>{NumberofCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
