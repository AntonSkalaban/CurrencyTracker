import { dateController } from "utils/helpers";
import { HistoryData } from "types/history";

export const getChartData = (data: HistoryData[]) => {
  const prices = data.map((data) => [data.price_open, data.price_close]);
  const colors = prices.map((value) => (value[0] <= value[1] ? "green" : "red"));
  const labels = data.map(({ time_period_start }) => {
    return dateController.toDDMM(time_period_start);
  });

  return {
    labels: labels,
    datasets: [
      {
        label: "Financial Data",
        data: prices,
        borderColor: "black",
        backgroundColor: colors,
      },
    ],
  };
};

export const options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: false,
    },
  },
};
