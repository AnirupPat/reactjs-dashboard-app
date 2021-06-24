import React, { useState, useEffect } from "react";
import classes from "./Home.module.css";
import SideNav from "../SideNav/SideNav";
import RangeSlider from "../Charts/BarChart/RangeSlider";
import Card from "../UI/Card/Card";
import SettingsOverscanIcon from "@material-ui/icons/SettingsOverscan";
import { prices, prices2 } from "../../utils/ChartData";
import DoughnutChart from "../Charts/Doughnut/Doughnut";
import LineChart from "../Charts/LineChart/LineChart";
import CountUp from "react-countup";
import { CardContent, Typography, Grid } from "@material-ui/core";
import NumberCard from "../UI/NumberCard/NumberCard";
import { useDispatch, useSelector } from "react-redux";
import InnovationKPIData from "../../utils/InnovationKPIData";

const Home = () => {
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
  const leftSection = (
    <div className={classes.home__left}>
      <SideNav />
    </div>
  );

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

  console.log(prices);

  let firstQuaterData = {
    labels: ["", "", "", ""],
    datasets: [
      {
        label: "",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 30, 250, 300],
      },
    ],
  };

  return (
    <div className={classes.home}>
      {state.visible && leftSection}

      <div className={rightSectionClasses}>
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
              data={firstQuaterData}
            />
          </NumberCard>
        ))}

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

export default Home;
