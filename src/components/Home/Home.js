import React from "react";
import classes from "./Home.module.css";
import SideNav from "../SideNav/SideNav";

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.home__left}>
        <SideNav />
      </div>
      <div className={classes.home__right}></div>
    </div>
  );
};

export default Home;
