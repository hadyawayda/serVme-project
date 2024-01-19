export interface Data {
  time: Array<string>;
  temperature_2m: Array<number>;
  rain: Array<number>;
  relative_humidity_2m: Array<number>;
  wind_speed_10m: Array<number>;
}

export interface dataProps {
  data: Data | null;
  loading: Boolean;
  error: Error | null;
}

export interface formattedData {
  time: string;
  temperature: number;
  humidity: number;
  rain: string;
  windSpeed: number;
}

export interface Action {
  type: string;
  payload: any;
}
