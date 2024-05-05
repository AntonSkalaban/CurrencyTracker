import { Component } from "react";
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
import { H2, LoadingSpinner } from "components";
import { options } from "constants/index";
import { fetchHistory } from "api";
import { cache, getChartData, popupObserver, shouldDataUpdate, Subject } from "utils";
import { HistoryCache, HistoryData } from "types";

import { ChartContainer } from "./styled";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ChartProps {
  curCode: string;
  data: HistoryData[];
  setData: (data: HistoryData[]) => void;
}

interface ChartState {
  isError: boolean;
  isFetching: boolean;
}
export class Chart extends Component<ChartProps, ChartState> {
  state = {
    isError: false,
    isFetching: false,
  };

  subject = new Subject<string>();

  popupObserver = new popupObserver();

  getGraphData = async () => {
    const { curCode } = this.props;
    try {
      this.setState({
        isError: false,
        isFetching: true,
      });

      const data = await fetchHistory(curCode);
      this.props.setData(data);

      cache.setObj(curCode, data);
    } catch (e) {
      this.setState({ isError: true });
    } finally {
      this.setState({ isFetching: false });
    }
  };

  updateData() {
    const { curCode, setData } = this.props;
    if (shouldDataUpdate(curCode)) this.getGraphData();
    else {
      this.setState({ isError: false });
      setData(cache.getObj<HistoryCache>(curCode)?.data || []);
    }
  }

  updateObserver() {
    if (!this.state.isFetching && !this.state.isError && this.props.data.length) {
      this.popupObserver.update();
    }
  }

  componentDidMount() {
    this.subject.addObserver(this.popupObserver);
    this.updateData();
    this.updateObserver();
  }

  componentDidUpdate(prevProps: Readonly<ChartProps>, prevState: Readonly<ChartState>): void {
    if (prevProps.curCode !== this.props.curCode) {
      this.updateData();
    }
    if (
      prevState.isError !== this.state.isError ||
      prevState.isFetching !== this.state.isFetching ||
      prevProps.data !== this.props.data
    )
      this.updateObserver();
  }

  componentWillUnmount() {
    this.subject.removeObserver(this.popupObserver);
  }

  render() {
    const { isFetching, isError } = this.state;
    const { data } = this.props;

    if (isError || (!data?.length && !isFetching))
      return (
        <ChartContainer>
          <H2>Error..</H2>
        </ChartContainer>
      );

    if (isFetching) {
      return (
        <ChartContainer>
          <LoadingSpinner />
        </ChartContainer>
      );
    }

    const chartData = getChartData(data);

    return <Bar options={options} data={chartData} />;
  }
}
