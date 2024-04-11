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
import { Title2 } from "components/styled";
import { fetchHistoryByDay, fetchHistoryByMonth } from "utils/api/api";
import { LocalStorage } from "utils/LocalStorage";
import { shouldDataUpdate } from "utils/shouldDataUpdate";
import { CandleData } from "types";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface HistoryData {
  data: CandleData[];
  lastUpdate: Date;
}

interface ChartProps {
  curCode: string;
  period: string;
  date: string;
}

export class Chart extends React.Component<ChartProps> {
  state = {
    candlesData:
      LocalStorage.getObj<HistoryData>(
        this.props.curCode + "-" + this.props.period + "-" + this.props.date
      )?.data || ([] as CandleData[]),
    isError: false,
    isFetching: false,
  };

  getGraphData = async (currCode: string, periodType: string, date: string) => {
    try {
      this.setState({
        isError: false,
        isFetching: true,
      });

      const data =
        this.props.period === "DAY"
          ? await fetchHistoryByDay(currCode, date)
          : await fetchHistoryByMonth(currCode, date);

      this.setState({ candlesData: data });

      LocalStorage.setObj(currCode + "-" + periodType + "-" + date, {
        data,
        lastUpdate: new Date(),
      });
    } catch (e) {
      this.setState({ isError: true });
    } finally {
      this.setState({ isFetching: false });
    }
  };

  componentDidMount() {
    //console.log(this.props.curCode + "-" + this.props.period + "-" + this.props.date);
    if (shouldDataUpdate(this.props.curCode + "-" + this.props.period + "-" + this.props.date))
      this.getGraphData(this.props.curCode, this.props.period, this.props.date);
    else {
      this.setState({
        candlesData: LocalStorage.getObj<HistoryData>(
          this.props.curCode + "-" + this.props.period + "-" + this.props.date
        )?.data,
      });
    }
  }

  componentDidUpdate(prevProps: Readonly<ChartProps>): void {
    if (
      prevProps.curCode !== this.props.curCode ||
      prevProps.period !== this.props.period ||
      prevProps.date !== this.props.date
    ) {
      if (shouldDataUpdate(this.props.curCode + "-" + this.props.period + "-" + this.props.date)) {
        this.getGraphData(this.props.curCode, this.props.period, this.props.date);
      } else {
        this.setState({
          candlesData: LocalStorage.getObj<HistoryData>(
            this.props.curCode + "-" + this.props.period + "-" + this.props.date
          )?.data,
        });
      }
    }
  }

  render() {
    const { candlesData, isFetching, isError } = this.state;

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

    if (isError) {
      return <Title2>Error..</Title2>;
    }

    if (isFetching) return <Title2>Fetching..</Title2>;

    return (
      <>
        <Bar options={options} data={data} />;
      </>
    );
  }
}
