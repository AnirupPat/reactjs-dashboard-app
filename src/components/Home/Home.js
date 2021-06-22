import React from "react";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.home__left}></div>
      <div className={classes.home__right}></div>
    </div>
  );
};

export default Home;
