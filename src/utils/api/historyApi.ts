import axios from "axios";
import { dateController } from "utils/helpers";
import { HistoryData } from "types";

const url = process.env.COIN_API_URL;
const headers = { "X-CoinAPI-Key": process.env.COIN_API_KEY };

const defaultTimeStart = "T00:00:00";

const timeLineInstance = axios.create({
  baseURL: url,
  headers,
});

export const fetchHistory = async (code: string) => {
  const { data } = await timeLineInstance.get<HistoryData[]>(`BITSTAMP_SPOT_${code}_USD/history`, {
    params: {
      period_id: "1DAY",
      time_start: dateController.subtractOneMonthFromNow() + defaultTimeStart,
    },
  });

  return data;
};
