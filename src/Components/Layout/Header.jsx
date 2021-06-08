import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';

import Classes from './Header.module.scss';
import MealImg from '../../Assets/img/meals.jpeg';


const Header = (props) => {
    return(
        <Fragment>
            <header className={Classes.header}>
                <h1>Meal Apps</h1>
                <HeaderCartButton />
            </header>
            <section className={Classes['main-image']}>
                <img src={MealImg} alt="Order Your Food"/>
            </section>
        </Fragment>
    )
}

export default Header;