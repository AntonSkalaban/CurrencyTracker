import { defQuotesData } from "constants/cardsData";

export const getSuggestionsValues = (value: string) => {
  return defQuotesData.reduce((acc, val) => {
    if (val.code.includes(value.toUpperCase())) acc.push(val.code);
    return acc;
  }, [] as string[]);
};
