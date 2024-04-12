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
import { fetchHistory } from "utils/api/historyApi";
import { cache } from "utils/cache";
import { shouldDataUpdate } from "utils/shouldDataUpdate";
import { HistoryCache } from "types";
import { getChartData, options } from "./constants";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ChartProps {
  curCode: string;
  period: string;
  date: string;
}

export class Chart extends React.Component<ChartProps> {
  key = this.props.curCode + "-" + this.props.period + "-" + this.props.date;

  state = {
    data: cache.getObj<HistoryCache>(this.key)?.data || [],
    isError: false,
    isFetching: false,
  };

  getGraphData = async () => {
    const { curCode, period, date } = this.props;
    try {
      this.setState({
        isError: false,
        isFetching: true,
      });

      const data = await fetchHistory(curCode, date, period);
      this.setState({ data });

      cache.setObj(this.key, data);
    } catch (e) {
      this.setState({ isError: true });
    } finally {
      this.setState({ isFetching: false });
    }
  };

  updateData() {
    this.key = this.props.curCode + "-" + this.props.period + "-" + this.props.date;
    if (shouldDataUpdate(this.key)) this.getGraphData();
    else {
      this.setState({
        isError: false,
        data: cache.getObj<HistoryCache>(this.key)?.data,
      });
    }
  }

  componentDidMount() {
    this.updateData();
  }

  componentDidUpdate(prevProps: Readonly<ChartProps>): void {
    if (
      prevProps.curCode !== this.props.curCode ||
      prevProps.period !== this.props.period ||
      prevProps.date !== this.props.date
    )
      this.updateData();
  }

  render() {
    const { data, isFetching, isError } = this.state;

    if (isError) {
      return <Title2>Error..</Title2>;
    }

    if (isFetching) return <Title2>Fetching..</Title2>;

    const chartData = getChartData(data);

    return (
      <>
        <Bar options={options} data={chartData} />;
      </>
    );
  }
}
