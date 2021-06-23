import React from "react";
import classes from "./Home.module.css";
import SideNav from "../SideNav/SideNav";
import { useSelector } from "react-redux";
import RangeSlider from "../Charts/RangeSlider";

const Home = () => {
  const sideNavVisible = useSelector((state) => state);
  let rightSectionClasses;
  if (sideNavVisible.visible) {
    rightSectionClasses = `${classes.home__right}`;
  } else {
    rightSectionClasses = `${classes.home__right__full}`;
  }
  console.log(sideNavVisible);
  const leftSection = (
    <div className={classes.home__left}>
      <SideNav />
    </div>
  );
  let prices = [];
  for (let i = 0; i < 500; i++) {
    prices.push(Math.floor(Math.random() * 80) + 1);
  }
  return (
    <div className={classes.home}>
      {sideNavVisible.visible && leftSection}

      <div className={rightSectionClasses}>
        <RangeSlider data={prices} />
      </div>
    </div>
  );
};

export default Home;
