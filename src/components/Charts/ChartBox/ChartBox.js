import React, { useState, useEffect } from "react";
import classes from "./ChartBox.module.scss";
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

  const barChartExpandHandler = (event) => {
    event.preventDefault();
    setBarChartExpandProp((prevProp) => !prevProp);
    if (state.visible) {
      dispatch({ type: "visible", value: !state.visible });
    }
  };

  const doughnutChartExpandHandler = (event) => {
    event.preventDefault();
    setDoughnutChartExpandProp((prevProp) => !prevProp);
    if (state.visible) {
      dispatch({ type: "visible", value: !state.visible });
    }
  };

  const lineChartExpandHandler = (event) => {
    event.preventDefault();
    setLineChartExpandProp((prevProp) => !prevProp);
    if (state.visible) {
      dispatch({ type: "visible", value: !state.visible });
    }
  };

  return (
    <div className={classes.chartBox}>
      <div className={classes.numberBox}>
        {props.data.numberCard.map((data) => (
          <NumberCard key={data.title}>
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
          <RangeSlider data={props.data.barGraph} />
        </Card>

        <Card expandProp={doughnutChartExpandProp}>
          <div className={classes.home__card__div}>
            <SettingsOverscanIcon
              onClick={doughnutChartExpandHandler}
              className={classes.home__expandIcon}
            />
          </div>
          <DoughnutChart data={props.data.doughnutGraph} />
        </Card>

        <Card expandProp={lineChartExpandProp}>
          <div className={classes.home__card__div}>
            <SettingsOverscanIcon
              onClick={lineChartExpandHandler}
              className={classes.home__expandIcon}
            />
          </div>
          <LineChart data={props.data.LineGraph} />
        </Card>
      </div>
    </div>
  );
};

export default ChartBox;
