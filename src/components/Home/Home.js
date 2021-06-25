import React, { useEffect, useState } from "react";
import classes from "./Home.module.css";
import SideNav from "../SideNav/SideNav";
import { useSelector } from "react-redux";
import InnovationKPIData from "../../utils/InnovationKPIData";
import ChartBox from "../Charts/ChartBox/ChartBox";
import IARevenues from "../../utils/IARevenues";
import SettingsIcon from "@material-ui/icons/Settings";
import BuildIcon from "@material-ui/icons/Build";
import GavelIcon from "@material-ui/icons/Gavel";

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

  const blankScreen = (
    <div className={classes.mainBlank}>
      <div className={classes.header__companyTag}>
        <span className={classes.mainLogo}>Accenture</span>
        <span className={classes.tagText}>High Performance Delivered.</span>
      </div>

      <div className={classes.blankScreen}>
        <div className={classes.blankScreen_firstDiv}>
          <SettingsIcon className={classes.blankScreen__small_icon} />
        </div>

        <div className={classes.blankScreen_secondDiv}>
          <SettingsIcon className={classes.blankScreen__small_icon} />
          <BuildIcon className={classes.blankScreen__small_icon} />
        </div>
      </div>

      <div className={classes.header__companyTag}>
        <span className={classes.tagText}>A 360° View Platform </span>
      </div>
    </div>
  );

  return (
    <div className={classes.home}>
      {state.visible && leftSection}

      <div className={rightSectionClasses}>
        {dashboardData && <ChartBox data={dashboardData} />}
        {!dashboardData && blankScreen}
      </div>
    </div>
  );
};

export default Home;
