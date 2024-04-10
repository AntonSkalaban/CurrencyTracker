import axios from "axios";
import { ConvertResponce } from "types";

const url = process.env.CURRENCYCONVERT_API_URL as string;

const headers = {
  ["X-RapidAPI-Key"]: process.env.CURRENCYCONVERT_API_KEY,
  ["X-RapidAPI-Host"]: process.env.CURRENCYCONVERT_API_HOSR,
};

export const getRate = async (from: string, to: string, amount = 1) => {
  const { data } = await axios.get(`${url}/convert`, {
    params: { from, to, amount },
    headers,
  });

  return data as ConvertResponce;
};

export interface CandleData {
  time_period_start: string;
  time_period_end: string;
  time_open: string;
  time_close: string;
  price_open: number;
  price_high: number;
  price_low: number;
  price_close: number;
  volume_traded: number;
  trades_count: number;
}

const timeLineInstance = axios.create({
  baseURL: "https://rest.coinapi.io/v1/ohlcv",
  headers: {
    "X-CoinAPI-Key": "F11A11C0-DFD3-20BA-45B2-A3ECA93C6FF1",
  },
});

// export const fetchHistory = async (from = "EUR", to = "USD", period_id: "1DAY" | "1MOTH") => {
//   const { data } = await axios.get(
//    BITSTAMP_SPOT_${from}_${to}/history?period_id=${period_id}&time_start=`,
//     {
//       headers: { "X-CoinAPI-Key":  },
//     }
//   );

//   return data as CandleData[];
// };

const defaultTimeStart = "T00:00:00";
const defaultTimeEnd = "T23:59:59";
// 2024-04-01

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
