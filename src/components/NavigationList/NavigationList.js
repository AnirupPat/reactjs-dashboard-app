import React from "react";
import classes from "./NavigationList.module.scss";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import TimelineIcon from "@material-ui/icons/Timeline";
import CloudIcon from "@material-ui/icons/Cloud";
import { useDispatch } from "react-redux";

const NavigationList = ({ projectTag, params }) => {
  const dispatch = useDispatch();
  const fetchDetailsHandler = (event) => {
    dispatch({
      type: "selectedKPI",
      value: {
        heading: projectTag,
        subHeading: event.target.innerText,
      },
    });
  };
  const control =
    params !== undefined &&
    params.map((param) => (
      <li onClick={fetchDetailsHandler} key={param}>
        {param === "Revenues" && <AttachMoneyIcon className={classes.icon} />}
        {param === "Stories" && <TimelineIcon className={classes.icon} />}
        {param === "Innovations" && <CloudIcon className={classes.icon} />}

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
