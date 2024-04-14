import { defQuotesData } from "constants/cardsData";
import { dateController } from "utils/helpers";

export const currencyOptions = defQuotesData.map(({ code }) => ({ name: code, value: code }));
export const dateOptions = [
  { name: "all month", value: "MONTH" + "%" + dateController.subtractOneMonthFromNow() },
  ...dateController.getDatesList(dateController.subtractOneMonthFromNow()).map((el) => ({
    name: dateController.toDDMonth(el),
    value: "DAY" + "%" + el,
  })),
];
