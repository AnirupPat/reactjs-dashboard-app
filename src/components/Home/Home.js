import React, { useState } from "react";
import classes from "./Home.module.css";
import SideNav from "../SideNav/SideNav";
import { useSelector } from "react-redux";
import RangeSlider from "../Charts/RangeSlider";
import Card from "../UI/Card/Card";
import SettingsOverscanIcon from "@material-ui/icons/SettingsOverscan";
import { useDispatch } from "react-redux";

const Home = () => {
  const [expandProp, setExpandProp] = useState(false);
  const dispatch = useDispatch();
  const sideNavVisible = useSelector((state) => state);
  // var expandProp = false;
  let rightSectionClasses,
    cardFullScreenClass = "";
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
  const chartExpandHandler = (event) => {
    event.preventDefault();
    rightSectionClasses = `${classes.home__right__full}`;
    cardFullScreenClass = `${classes.home__card__full}`;
    // expandProp = true;
    setExpandProp((prevProp) => !prevProp);
    if (sideNavVisible.visible) {
      dispatch({ type: "visible", value: !sideNavVisible.visible });
    }
  };
  return (
    <div className={classes.home}>
      {sideNavVisible.visible && leftSection}

      <div className={rightSectionClasses}>
        <Card className={cardFullScreenClass} expandProp={expandProp}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              margin: "5px",
            }}
          >
            <SettingsOverscanIcon
              onClick={chartExpandHandler}
              className={classes.home__expandIcon}
            />
          </div>

          <RangeSlider data={prices} />
        </Card>
      </div>
    </div>
  );
};

export default Home;
