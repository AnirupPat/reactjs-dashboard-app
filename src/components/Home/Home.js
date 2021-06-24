import React, { useState, useEffect } from "react";
import classes from "./Home.module.css";
import SideNav from "../SideNav/SideNav";
import RangeSlider from "../Charts/BarChart/RangeSlider";
import Card from "../UI/Card/Card";
import SettingsOverscanIcon from "@material-ui/icons/SettingsOverscan";
import DoughnutChart from "../Charts/Doughnut/Doughnut";
import LineChart from "../Charts/LineChart/LineChart";
import CountUp from "react-countup";
import { Typography } from "@material-ui/core";
import NumberCard from "../UI/NumberCard/NumberCard";
import { useDispatch, useSelector } from "react-redux";
import InnovationKPIData from "../../utils/InnovationKPIData";
import SettingsIcon from "@material-ui/icons/Settings";
import ChartBox from "../Charts/ChartBox/ChartBox";

const Home = () => {
  // const [barChartExpandProp, setBarChartExpandProp] = useState(false);
  // const [doughnutChartExpandProp, setDoughnutChartExpandProp] = useState(false);
  // const [lineChartExpandProp, setLineChartExpandProp] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  // useEffect(() => {
  //   if (state.visible) {
  //     setBarChartExpandProp(false);
  //     setDoughnutChartExpandProp(false);
  //     setLineChartExpandProp(false);
  //   }
  // }, [state.visible]);
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

  return (
    <div className={classes.home}>
      {state.visible && leftSection}

      <div className={rightSectionClasses}>
        <ChartBox data={InnovationKPIData} />
      </div>
    </div>
  );
};

export default Home;
