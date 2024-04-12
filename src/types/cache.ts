import { ConvertResponce } from "./convert";
import { HistoryData } from "./history";

interface Cache {
  lastUpdate: Date;
}

export interface HistoryCache extends Cache {
  data: HistoryData[];
}

export interface CyrrencyCache extends Cache {
  data: ConvertResponce[];
}

export interface RateCache extends Cache {
  data: number;
}
