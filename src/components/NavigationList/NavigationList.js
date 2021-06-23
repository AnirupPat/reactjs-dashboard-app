import React from "react";
import classes from "./NavigationList.module.css";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import TimelineIcon from "@material-ui/icons/Timeline";

const NavigationList = ({ projectTag, params }) => {
  const control =
    params !== undefined &&
    params.map((param) => (
      <li>
        {param === "Revenues" && <AttachMoneyIcon className={classes.icon} />}
        {param === "Stories" && <TimelineIcon className={classes.icon} />}

        <div>{param}</div>
      </li>
    ));
  return (
    <div className={classes.navigationList}>
      <div className={classes.navigationList__title}>
        <span>{projectTag}</span>
      </div>

      <ul>{control}</ul>
      <hr />
    </div>
  );
};

export default NavigationList;
