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

export const fetchHistory = async (to = "USD", from = "EUR") => {
  const { data } = await axios.get(
    `https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_${from}_${to}/history?period_id=1DAY&time_start=2024-04-01T00:00:00.0000000Z`,
    {
      headers: { "X-CoinAPI-Key": "F11A11C0-DFD3-20BA-45B2-A3ECA93C6FF1" },
    }
  );

  return data as CandleData[];
};
