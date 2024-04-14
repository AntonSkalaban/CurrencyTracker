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
import { StyledLoadingSpinner } from "components/UI/LoadingSpiner/styled";
import { fetchHistory } from "utils/api/historyApi";
import { cache } from "utils/cache";
import { Subject } from "utils/observer";
import { PopupObserver } from "utils/PopUpObserver";
import { shouldDataUpdate } from "utils/shouldDataUpdate";
import { HistoryCache, HistoryData } from "types";
import { getChartData, options } from "./constants";
import { ChartContainer } from "./styled";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ChartProps {
  curCode: string;
  period: string;
  date: string;
}

interface ChartState {
  data: HistoryData[];
  isError: boolean;
  isFetching: boolean;
}
export class Chart extends React.Component<ChartProps, ChartState> {
  key = this.props.curCode + "-" + this.props.period + "-" + this.props.date;

  state = {
    data: cache.getObj<HistoryCache>(this.key)?.data || [],
    isError: false,
    isFetching: false,
  };

  subject = new Subject<string>();

  popupObserver = new PopupObserver();

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
        data: cache.getObj<HistoryCache>(this.key)?.data || [],
      });
    }
  }

  updateObserver() {
    if (!this.state.isFetching && !this.state.isError) {
      this.popupObserver.update(this.props.period);
    }
  }

  componentDidMount() {
    this.subject.addObserver(this.popupObserver);
    this.updateData();
    this.updateObserver();
  }

  componentDidUpdate(prevProps: Readonly<ChartProps>, prevState: Readonly<ChartState>): void {
    if (
      prevProps.curCode !== this.props.curCode ||
      prevProps.period !== this.props.period ||
      prevProps.date !== this.props.date
    ) {
      this.updateData();
    }
    if (prevState.isError !== this.state.isError || prevState.isFetching !== this.state.isFetching)
      this.updateObserver();
  }

  componentWillUnmount() {
    this.subject.removeObserver(this.popupObserver);
  }

  render() {
    const { data, isFetching, isError } = this.state;

    if (isError || !data.length)
      return (
        <ChartContainer>
          <Title2>Error..</Title2>
        </ChartContainer>
      );

    if (isFetching)
      return (
        <ChartContainer>
          <StyledLoadingSpinner />
        </ChartContainer>
      );

    const chartData = getChartData(data);

    return (
      <ChartContainer>
        <Bar options={options} data={chartData} />
      </ChartContainer>
    );
  }
}
