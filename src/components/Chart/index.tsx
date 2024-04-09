import React from "react";
import { Bar } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { CandleData, fetchHistory } from "utils/api/api";
import { LocalStorage } from "utils/LocalStorage";
import { shouldDataUpdate } from "utils/shouldDataUpdate";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface HistoryData {
  data: CandleData[];
  lastUpdate: Date;
}

export class Chart extends React.Component<{ curCode: string }> {
  keyName = (this.props.curCode || "USD") + "-history";

  state = {
    candlesData: LocalStorage.getObj<HistoryData>(this.keyName)?.data || ([] as CandleData[]),
    isError: false,
    isFetching: false,
  };

  componentDidMount() {
    const getGraphData = async () => {
      try {
        this.setState({
          isError: false,
          isFetching: true,
        });

        const data = await fetchHistory(this.props.curCode);

        this.setState({ candlesData: data });

        LocalStorage.setObj(this.keyName, { data, lastUpdate: new Date() });
      } catch (e) {
        this.setState({ isError: true });
      } finally {
        this.setState({ isFetching: false });
      }
    };

    console.log(this.keyName);

    if (shouldDataUpdate(this.keyName)) getGraphData();
  }

  render() {
    const { candlesData } = this.state;

    const dataArr = candlesData.map((data) => [data.price_open, data.price_close]);
    const colors = dataArr.map((value) => (value[0] <= value[1] ? "green" : "red"));
    const labels = candlesData.map((data) => {
      const date = new Date(data.time_period_start);
      const day = ("0" + date.getDate()).slice(-2);
      const month = ("0" + (date.getMonth() + 1)).slice(-2);

      return `${day}.${month}`;
    });

    const data = {
      labels: labels,
      datasets: [
        {
          label: "Financial Data",
          data: dataArr,
          borderColor: "black",
          backgroundColor: colors,
        },
      ],
    };

    const options = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: false,
        },
      },
    };

    return (
      <>
        {" "}
        <Bar options={options} data={data} />;
      </>
    );
  }
}
