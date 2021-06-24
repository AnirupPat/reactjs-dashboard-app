import React, { useState, useEffect } from "react";
import classes from "./Home.module.css";
import SideNav from "../SideNav/SideNav";
import { useSelector } from "react-redux";
import RangeSlider from "../Charts/BarChart/RangeSlider";
import Card from "../UI/Card/Card";
import SettingsOverscanIcon from "@material-ui/icons/SettingsOverscan";
import { useDispatch } from "react-redux";
import { prices, prices2 } from "../../utils/ChartData";
import DoughnutChart from "../Charts/Doughnut/Doughnut";
import LineChart from "../Charts/LineChart/LineChart";

const Home = () => {
  const [barChartExpandProp, setBarChartExpandProp] = useState(false);
  const [doughnutChartExpandProp, setDoughnutChartExpandProp] = useState(false);
  const [lineChartExpandProp, setLineChartExpandProp] = useState(false);

  const dispatch = useDispatch();
  const sideNavVisible = useSelector((state) => state);
  useEffect(() => {
    if (sideNavVisible.visible) {
      setBarChartExpandProp(false);
      setDoughnutChartExpandProp(false);
      setLineChartExpandProp(false);
    }
  }, [sideNavVisible.visible]);
  let rightSectionClasses;
  if (sideNavVisible.visible) {
    rightSectionClasses = `${classes.home__right}`;
  } else {
    rightSectionClasses = `${classes.home__right__full}`;
  }
  const leftSection = (
    <div className={classes.home__left}>
      <SideNav />
    </div>
  );

  const barChartExpandHandler = (event) => {
    event.preventDefault();
    rightSectionClasses = `${classes.home__right__full}`;
    setBarChartExpandProp((prevProp) => !prevProp);
    if (sideNavVisible.visible) {
      dispatch({ type: "visible", value: !sideNavVisible.visible });
    }
  };

  const doughnutChartExpandHandler = (event) => {
    event.preventDefault();
    rightSectionClasses = `${classes.home__right__full}`;
    setDoughnutChartExpandProp((prevProp) => !prevProp);
    if (sideNavVisible.visible) {
      dispatch({ type: "visible", value: !sideNavVisible.visible });
    }
  };

  const lineChartExpandHandler = (event) => {
    event.preventDefault();
    rightSectionClasses = `${classes.home__right__full}`;
    setLineChartExpandProp((prevProp) => !prevProp);
    if (sideNavVisible.visible) {
      dispatch({ type: "visible", value: !sideNavVisible.visible });
    }
  };

  return (
    <div className={classes.home}>
      {sideNavVisible.visible && leftSection}

      <div className={rightSectionClasses}>
        <Card expandProp={barChartExpandProp}>
          <div className={classes.home__card__div}>
            <SettingsOverscanIcon
              onClick={barChartExpandHandler}
              className={classes.home__expandIcon}
            />
          </div>
          <RangeSlider data={prices} />
        </Card>

        <Card expandProp={doughnutChartExpandProp}>
          <div className={classes.home__card__div}>
            <SettingsOverscanIcon
              onClick={doughnutChartExpandHandler}
              className={classes.home__expandIcon}
            />
          </div>
          <DoughnutChart />
        </Card>

        <Card expandProp={lineChartExpandProp}>
          <div className={classes.home__card__div}>
            <SettingsOverscanIcon
              onClick={lineChartExpandHandler}
              className={classes.home__expandIcon}
            />
          </div>
          <LineChart />
        </Card>
        <Card>
          <div className={classes.home__card__div}>
            <SettingsOverscanIcon className={classes.home__expandIcon} />
          </div>
          <RangeSlider data={prices2} />
        </Card>
        <Card>
          <div className={classes.home__card__div}>
            <SettingsOverscanIcon className={classes.home__expandIcon} />
          </div>
          <RangeSlider data={prices2} />
        </Card>
        <Card>
          <div className={classes.home__card__div}>
            <SettingsOverscanIcon className={classes.home__expandIcon} />
          </div>
          <RangeSlider data={prices2} />
        </Card>
      </div>
    </div>
  );
};

export default Home;
