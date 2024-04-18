import axios from "axios";
import { ConvertResponce } from "types";

const url = process.env.CURRENCYCONVERT_API_URL;

const headers = {
  ["X-RapidAPI-Key"]: process.env.CURRENCYCONVERT_API_KEY,
  ["X-RapidAPI-Host"]: process.env.CURRENCYCONVERT_API_HOSR,
};

export const getRate = async (from: string, to: string, amount = 1) => {
  const { data } = await axios.get<ConvertResponce>(`${url}/convert`, {
    params: { from, to, amount },
    headers,
  });

  return data;
};
