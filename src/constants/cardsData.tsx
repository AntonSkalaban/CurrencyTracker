import { CardData, DefaultCardData } from "types/card";
import { quotesIcons, stocksIcons } from "./icons";

export const defStocksData: CardData[] = [
  {
    title: "Bovespa Index",
    subtitle: "0.15%",
    code: "BVSP",
    img: stocksIcons["BVSP"],
  },
  {
    title: "IFIX",
    subtitle: "0.15%",
    code: "IFIX",
    img: stocksIcons["IFIX"],
  },
];

export const defQuotesData: DefaultCardData[] = [
  {
    title: "Commercial Dollar",
    code: "USD",
    img: quotesIcons["USD"],
  },
  {
    title: "Argentine Peso",
    code: "ARS",
    img: quotesIcons["ARS"],
  },
  {
    title: "Canadian Dollar",
    code: "CAD",
    img: quotesIcons["CAD"],
  },
  {
    title: "Yen",
    code: "JPY",
    img: quotesIcons["JPY"],
  },
  {
    title: "Australian Dollar",
    code: "AUD",
    img: quotesIcons["AUD"],
  },
  {
    title: "Yuan",
    code: "CNY",
    img: quotesIcons["CNY"],
  },
  {
    title: "Euro",
    code: "EUR",
    img: quotesIcons["EUR"],
  },
  {
    title: "Bitcoin",
    code: "BTC",
    img: quotesIcons["BTC"],
  },
  {
    title: "Libra",
    code: "GBP",
    img: quotesIcons["GBP"],
  },
];
