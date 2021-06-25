import React, { useEffect, useState } from "react";
import classes from "./Home.module.css";
import SideNav from "../SideNav/SideNav";
import { useSelector } from "react-redux";
import InnovationKPIData from "../../utils/InnovationKPIData";
import ChartBox from "../Charts/ChartBox/ChartBox";
import IARevenues from "../../utils/IARevenues";

const Home = () => {
  const [dashboardData, setDashboardData] = useState("");
  const state = useSelector((state) => state);
  console.log(state);

  useEffect(() => {
    if (
      state.selectedKPI.heading === "EXTRAS" &&
      state.selectedKPI.subHeading === "Innovations"
    ) {
      setDashboardData(InnovationKPIData);
    } else if (
      state.selectedKPI.heading === "INTELLIGENT AUTOMATION" &&
      state.selectedKPI.subHeading === "Revenues"
    ) {
      console.log(IARevenues);
      setDashboardData(IARevenues);
    } else setDashboardData("");
  }, [state.selectedKPI]);

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
  // let dashboardData = "";

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
