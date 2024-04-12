import axios from "axios";
import { HistoryData } from "types";

const url = process.env.COIN_API_URL;
const headers = { "X-CoinAPI-Key": process.env.COIN_API_KEY };

const defaultTimeStart = "T00:00:00";
const defaultTimeEnd = "T23:59:59";

const timeLineInstance = axios.create({
  baseURL: url,
  headers,
});

export const fetchHistory = async (code: string, day: string, period = "DAY") => {
  const { data } = await timeLineInstance.get<HistoryData[]>(`BITSTAMP_SPOT_${code}_USD/history`, {
    params: {
      period_id: "1DAY",
      time_start: `${day}${defaultTimeStart}`,
      time_end: (period === "DAY" && `${day}${defaultTimeEnd}`) || null,
    },
  });

  return data;
};
