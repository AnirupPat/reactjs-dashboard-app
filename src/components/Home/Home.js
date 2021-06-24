import React from "react";
import classes from "./Home.module.css";
import SideNav from "../SideNav/SideNav";
import { useSelector } from "react-redux";
import InnovationKPIData from "../../utils/InnovationKPIData";
import ChartBox from "../Charts/ChartBox/ChartBox";

const Home = () => {
  const state = useSelector((state) => state);
  console.log(state);
  let rightSectionClasses;
  if (state.visible) {
    rightSectionClasses = `${classes.home__right}`;
  } else {
    rightSectionClasses = `${classes.home__right__full}`;
  }
  const leftSection = (
    <div className={classes.home__left}>
      <SideNav />
    </div>
  );
  let dashboardData = "";
  if (
    state.selectedKPI.heading === "EXTRAS" &&
    state.selectedKPI.subHeading === "Innovations"
  ) {
    dashboardData = InnovationKPIData;
  }

  return (
    <div className={classes.home}>
      {state.visible && leftSection}

      <div className={rightSectionClasses}>
        {dashboardData && <ChartBox data={dashboardData} />}
      </div>
    </div>
  );
};

export default Home;
