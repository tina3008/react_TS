import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'https://api.apilayer.com/exchangerates_data/',
  headers: { apikey: '77ghNH4c3FGDkTaMQqa9544j9hn1s8eM' },
});

interface ExchangeQuery {
  from: string;
  to: string;
  amount: number;
};

interface ExchangeInfo {
  rate: number;
};

interface ExchangeResponse {
  query: ExchangeQuery;
  info: ExchangeInfo;
  result: number;
};

export interface ExchangeResult extends ExchangeQuery {
  rate: number;
  result: number;
};

export const exchangeCurrency = async (
  credentials: Record<string, string | number>,
): Promise<ExchangeResult> => {
  const {
    data: { query, info, result },
  }: AxiosResponse<ExchangeResponse> = await instance.get(`/convert`, {
    params: credentials,
  });
  return { ...query, rate: info.rate, result };
};

interface LatestRatesResponse {
  base: string;
  rates: Record<string, number>;
};
export const latestRates = async (
  baseCurrency: string,
): Promise<[string, number][]> => {
  const { data }: AxiosResponse<LatestRatesResponse> = await instance.get(
    `/latest?symbols&base=${baseCurrency}`,
  );
  return Object.entries(data.rates);
};
