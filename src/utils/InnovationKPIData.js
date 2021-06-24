let totCount = 0;
let data = [45, 27, 12, 39, 70, 12, 24, 9, 20, 31, 22, 28];
data.forEach((val) => (totCount += val));

let InnovationKPIData = {
  numberCard: [
    {
      title: "Ideas",
      number: totCount,
      unit: "",
    },
    {
      title: "Approved Ideas",
      number: Math.floor(totCount * 0.35),
      unit: "",
    },
    {
      title: "Ideas Implemented",
      number: Math.floor(totCount * 0.15),
      unit: "",
    },
    {
      title: "Revene Generated",
      number: "11200",
      unit: "$",
    },
  ],
  barGraph: {
    title: "Ideas",
    lables: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    prices: [45, 27, 12, 39, 70, 12, 24, 9, 20, 31, 22, 28],
  },
  doughnutGraph: {
    labels: ["Approved", "Implemented", "On Hold"],
    data: [118, 50, 171],
  },
};

export default InnovationKPIData;
