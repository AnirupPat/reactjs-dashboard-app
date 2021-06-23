import React from "react";
import classes from "./Header.module.css";
import HorizontalSplitIcon from "@material-ui/icons/HorizontalSplit";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.header__leftSection}>
        <HorizontalSplitIcon className={classes.header__icon} />
        <div className={classes.header__companyTag}>
          <span className={classes.mainLogo}>Accenture</span>
          <span className={classes.tagText}>High Performance Delivered.</span>
        </div>
      </div>

      <div className={classes.header__rightSection}>
        <h2>Workstream Dashboard</h2>
      </div>
    </div>
  );
};

export default Header;
