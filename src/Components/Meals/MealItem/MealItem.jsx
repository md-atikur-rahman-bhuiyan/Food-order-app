import { useContext } from "react";
import Classes from "./MealItem.module.scss";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../Store/cart-context";

const MealItem = (props) => {
  const price = props.price;
  const cartCTX = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCTX.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={Classes.meal}>
      <div>
        <div>
          <h3>{props.name}</h3>
        </div>
        <div className={Classes.description}>{props.description}</div>
        <div className={Classes.price}>$ {price}</div>
      </div>
      <div>
        <MealItemForm onAddtoCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
