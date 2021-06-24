import React from "react";
import { chartColors } from "./Colors";
import { Doughnut, Pie } from "react-chartjs-2";
import "./Styles.css";

const options = {
  legend: {
    display: false,
    position: "right",
  },
  elements: {
    arc: {
      borderWidth: 0,
    },
  },
};
const pieOptions = {
  legend: {
    display: false,
    position: "right",
    legendCallback: function (chart) {
      // Return the HTML string here.
      return [
        <ul>
          <li>z</li>
          <li>zzzz</li>
          <li>ppp</li>
          <li>adasda</li>
        </ul>,
      ];
    },
  },
  elements: {
    arc: {
      borderWidth: 0,
    },
  },
};

const pieData = {
  maintainAspectRatio: false,
  responsive: false,
  labels: ["usa", "europe", "africa"],
  datasets: [
    {
      data: [200, 150, 20, 10],
      backgroundColor: chartColors,
      hoverBackgroundColor: chartColors,
    },
  ],
};

const DoughnutChart = (props) => {
  let chartInstance = null;
  let data = {
    maintainAspectRatio: false,
    responsive: false,
    labels: props.data.labels,
    datasets: [
      {
        data: props.data.data,
        backgroundColor: chartColors,
        hoverBackgroundColor: chartColors,
      },
    ],
  };
  return (
    <div style={styles.centered}>
      <div style={styles.relative}>
        <Doughnut data={data} options={options} />
        <div style={styles.pieContainer}></div>
        <div id="legend" />
      </div>
    </div>
  );
};

// <Pie
//   data={data}
//   options={pieOptions}
//   ref={(input) => {
//     chartInstance = input;
//   }}
// />;

const styles = {
  pieContainer: {
    width: "40%",
    height: "40%",
    top: "50%",
    left: "50%",
    position: "absolute",
    transform: "translate(-50%, -50%)",
  },
  relative: {
    position: "relative",
    width: "250px",
  },
  centered: {
    display: "flex",
    justifyContent: "center",
  },
};

export default DoughnutChart;
