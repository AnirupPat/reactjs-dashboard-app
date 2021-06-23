import React from "react";
import classes from "./Header.module.css";
import HorizontalSplitIcon from "@material-ui/icons/HorizontalSplit";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const iconHandler = () => {
    dispatch({ type: "visible" });
  };
  return (
    <div className={classes.header}>
      <div className={classes.header__leftSection}>
        <HorizontalSplitIcon
          className={classes.header__icon}
          onClick={iconHandler}
        />
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
