import Classes from './MealItemForm.module.scss';

const MealItemForm = (props) => {
    return(
        <form className={Classes.form}>
            <input type="text"/>
            <button>+ Add</button>

        </form>
    )
}

export default MealItemForm;