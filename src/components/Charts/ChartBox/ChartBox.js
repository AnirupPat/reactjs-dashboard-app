import React, { useState, useEffect } from "react";
import classes from "./ChartBox.module.css";
import InnovationKPIData from "../../../utils/InnovationKPIData";
import NumberCard from "../../UI/NumberCard/NumberCard";
import { Typography } from "@material-ui/core";
import CountUp from "react-countup";
import LineChart from "../LineChart/LineChart";
import Card from "../../UI/Card/Card";
import RangeSlider from "../BarChart/RangeSlider";
import SettingsOverscanIcon from "@material-ui/icons/SettingsOverscan";
import { useDispatch, useSelector } from "react-redux";
import DoughnutChart from "../Doughnut/Doughnut";

const ChartBox = (props) => {
  const [barChartExpandProp, setBarChartExpandProp] = useState(false);
  const [doughnutChartExpandProp, setDoughnutChartExpandProp] = useState(false);
  const [lineChartExpandProp, setLineChartExpandProp] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    if (state.visible) {
      setBarChartExpandProp(false);
      setDoughnutChartExpandProp(false);
      setLineChartExpandProp(false);
    }
  }, [state.visible]);
  let rightSectionClasses;
  if (state.visible) {
    rightSectionClasses = `${classes.home__right}`;
  } else {
    rightSectionClasses = `${classes.home__right__full}`;
  }

  const barChartExpandHandler = (event) => {
    event.preventDefault();
    rightSectionClasses = `${classes.home__right__full}`;
    setBarChartExpandProp((prevProp) => !prevProp);
    if (state.visible) {
      dispatch({ type: "visible", value: !state.visible });
    }
  };

  const doughnutChartExpandHandler = (event) => {
    event.preventDefault();
    rightSectionClasses = `${classes.home__right__full}`;
    setDoughnutChartExpandProp((prevProp) => !prevProp);
    if (state.visible) {
      dispatch({ type: "visible", value: !state.visible });
    }
  };

  const lineChartExpandHandler = (event) => {
    event.preventDefault();
    rightSectionClasses = `${classes.home__right__full}`;
    setLineChartExpandProp((prevProp) => !prevProp);
    if (state.visible) {
      dispatch({ type: "visible", value: !state.visible });
    }
  };

  return (
    <div className={classes.chartBox}>
      <div className={classes.numberBox}>
        {InnovationKPIData.numberCard.map((data) => (
          <NumberCard>
            <div>
              <span className={classes.home__numberCard__title}>
                {data.title}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  color: "white",
                  marginTop: "15px",
                  marginRight: "5px",
                }}
              >
                {data.unit}
              </span>
              <Typography
                variant="h5"
                component="h2"
                className={classes.home__numberCard__number}
              >
                <CountUp
                  style={{ color: "white" }}
                  start={0}
                  end={data.number}
                  duration={2.75}
                  separator=","
                />
              </Typography>
            </div>
            <LineChart
              style={{ width: "200px", height: "100px" }}
              data={data.lineData}
            />
          </NumberCard>
        ))}
      </div>

      <div className={classes.charts}>
        <Card expandProp={barChartExpandProp}>
          <div className={classes.home__card__div}>
            <SettingsOverscanIcon
              onClick={barChartExpandHandler}
              className={classes.home__expandIcon}
            />
          </div>
          <RangeSlider data={InnovationKPIData.barGraph} />
        </Card>

        <Card expandProp={doughnutChartExpandProp}>
          <div className={classes.home__card__div}>
            <SettingsOverscanIcon
              onClick={doughnutChartExpandHandler}
              className={classes.home__expandIcon}
            />
          </div>
          <DoughnutChart data={InnovationKPIData.doughnutGraph} />
        </Card>

        <Card expandProp={lineChartExpandProp}>
          <div className={classes.home__card__div}>
            <SettingsOverscanIcon
              onClick={lineChartExpandHandler}
              className={classes.home__expandIcon}
            />
          </div>
          <LineChart data={InnovationKPIData.LineGraph} />
        </Card>
      </div>
    </div>
  );
};

export default ChartBox;
