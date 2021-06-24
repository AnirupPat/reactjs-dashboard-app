import React from "react";
import classes from "./NumberCard.module.css";

const NumberCard = (props) => {
  return <div className={classes.numberCard}>{props.children}</div>;
};

export default NumberCard;
