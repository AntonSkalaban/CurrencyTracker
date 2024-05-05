import { HistoryData } from "types";

import { dateController } from "./dateController";

export const changeChartData = (
  data: HistoryData[],
  newData: { date: string; minVal: string; maxVal: string },
) => {
  return data.map((el) => {
    if (new Date(el.time_period_start).toDateString() === new Date(newData.date).toDateString()) {
      return { ...el, price_open: +newData.minVal, price_close: +newData.maxVal };
    }
    return el;
  });
};

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
