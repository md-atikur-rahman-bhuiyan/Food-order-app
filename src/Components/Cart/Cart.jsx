import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import CartItem from "./CartItem";
import Model from "../UI/Model";
import Classes from "./Cart.module.scss";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const CartItems = (
    <ul className={Classes.cart_items}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Model onClose={props.onClose}>
      {CartItems}
      <div className={Classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={Classes.actions}>
        <button className={Classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={Classes.button}>Order</button>}
      </div>
    </Model>
  );
};

export default Cart;
