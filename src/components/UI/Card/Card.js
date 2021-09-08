import classes from "./Card.module.scss";

const Card = (props) => {
  const wrapperClass = props.expandProp
    ? `${classes.card__expand}`
    : `${classes.card}`;
  const cardClass = `${wrapperClass} ${props.className}`;
  return <div className={cardClass}>{props.children}</div>;
};

export default Card;
