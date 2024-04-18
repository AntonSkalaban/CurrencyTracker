import { defQuotesData } from "constants/index";

export const getHintsValues = (value: string) => {
  return defQuotesData.reduce((acc, val) => {
    if (val.code.includes(value.toUpperCase())) acc.push(val.code);
    return acc;
  }, [] as string[]);
};
