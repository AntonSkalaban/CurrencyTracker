import ARS_Icon from "assets/svg/ARS.svg";
import AUD_Icon from "assets/svg/AUD.svg";
import BTC_Icon from "assets/svg/BTC.svg";
import CAD_Icon from "assets/svg/CAD.svg";
import CNY_Icon from "assets/svg/CNY.svg";
import EUR_Icon from "assets/svg/EUR.svg";
import GBP_Icon from "assets/svg/GBP.svg";
import JPY_Icon from "assets/svg/JPY.svg";
import USD_Icon from "assets/svg/USD.svg";

export interface Icon {
  [key: string]: JSX.Element;
}

export const stocksIcons: Icon = {
  BVSP: <USD_Icon style={{ width: "100%", height: "100%" }} />,
  IFIX: <ARS_Icon style={{ width: "100%", height: "100%" }} />,
};
export const quotesIcons: Icon = {
  USD: <USD_Icon style={{ width: "100%", height: "100%" }} />,
  ARS: <ARS_Icon style={{ width: "100%", height: "100%" }} />,
  CAD: <CAD_Icon style={{ width: "100%", height: "100%" }} />,
  JPY: <JPY_Icon style={{ width: "100%", height: "100%" }} />,
  AUD: <AUD_Icon style={{ width: "100%", height: "100%" }} />,
  CNY: <CNY_Icon style={{ width: "100%", height: "100%" }} />,
  EUR: <EUR_Icon style={{ width: "100%", height: "100%" }} />,
  BTC: <BTC_Icon style={{ width: "100%", height: "100%" }} />,
  GBP: <GBP_Icon style={{ width: "100%", height: "100%" }} />,
};
