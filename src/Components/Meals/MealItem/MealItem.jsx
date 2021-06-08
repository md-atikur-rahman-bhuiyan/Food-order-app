import Classes from './MealItem.module.scss';
import MealItemForm from './MealItemForm';


const MealItem = (props) => {
    const price = props.price;
    return(
        <li className={Classes.meal}>
            <div>
                <div><h3>{props.name}</h3></div>
                <div className={Classes.description}>{props.description}</div>
                <div className={Classes.price}>$ {price}</div>
            </div>
            <div>
                <MealItemForm />
            </div>
        </li>
    )
}

export default MealItem;