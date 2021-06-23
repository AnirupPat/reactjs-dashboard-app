import React from "react";
import classes from "./NavigationList.module.css";

const NavigationList = ({ projectTag, params }) => {
  console.log(params);
  return (
    <div className={classes.navigationList}>
      <div className={classes.navigationList__title}>
        <span>{projectTag}</span>
      </div>

      <ul>
        {params !== undefined ? params.map((param) => <li>{param}</li>) : ""}
      </ul>
    </div>
  );
};

export default NavigationList;
