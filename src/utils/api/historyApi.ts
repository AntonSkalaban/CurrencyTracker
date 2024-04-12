import axios from "axios";
import { CandleData } from "types";

const timeLineInstance = axios.create({
  baseURL: "https://rest.coinapi.io/v1/ohlcv",
  headers: {
    "X-CoinAPI-Key": "F11A11C0-DFD3-20BA-45B2-A3ECA93C6FF1",
  },
});

const defaultTimeStart = "T00:00:00";
const defaultTimeEnd = "T23:59:59";

export const fetchHistoryByDay = async (code: string, day: string) => {
  const { data } = await timeLineInstance.get<CandleData[]>(`BITSTAMP_SPOT_${code}_USD/history`, {
    params: {
      period_id: "1DAY",
      time_start: `${day}${defaultTimeStart}`,
      time_end: `${day}${defaultTimeEnd}`,
    },
  });

  return data;
};

export const fetchHistoryByMonth = async (code: string, day: string) => {
  const { data } = await timeLineInstance.get<CandleData[]>(`BITSTAMP_SPOT_${code}_USD/history`, {
    params: {
      period_id: "1DAY",
      time_start: `${day}${defaultTimeStart}`,
    },
  });

  return data;
};
