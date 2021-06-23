import React from "react";
import classes from "./Home.module.css";
import SideNav from "../SideNav/SideNav";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const sideNavVisible = useSelector((state) => state);
  let rightSectionClasses;
  if (sideNavVisible.visible) {
    rightSectionClasses = `{${classes.home__right__full} ${classes.home__right}}`;
  } else {
    rightSectionClasses = `{${classes.home__right__full}}`;
  }
  console.log(sideNavVisible);
  const leftSection = (
    <div className={classes.home__left}>
      <SideNav />
    </div>
  );
  return (
    <div className={classes.home}>
      {sideNavVisible.visible && leftSection}

      <div className={rightSectionClasses}>Right side</div>
    </div>
  );
};

export default Home;
