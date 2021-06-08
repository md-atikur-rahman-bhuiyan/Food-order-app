import Classes from './Card.module.scss';

const Card = (props) => {
    return(
        <div className={Classes.card}>{props.children}</div>
    )
}

export default Card;