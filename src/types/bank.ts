export interface Bank {
  name: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  currencies: string[];
}
