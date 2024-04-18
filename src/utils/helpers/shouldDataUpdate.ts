import { isDateExpired } from "./isDateExpired";

export const shouldDataUpdate = (key: string) => {
  const val = localStorage.getItem(key);
  if (val) {
    const { lastUpdate } = JSON.parse(val);
    return isDateExpired(lastUpdate);
  }
  return true;
};
