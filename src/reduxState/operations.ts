import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  exchangeCurrency,
  ExchangeResult,
  latestRates,
} from '../service/exchangeAPI';
import { getUserInfo } from '../service/opencagedataApi';
import type { RootState } from './store';

type RatesArray = [string, number][];

export const fetchBaseCurrency = createAsyncThunk<
  string, // ReturnType
  { latitude: number; longitude: number }, // ArgType
  { state: RootState; rejectValue: string }
>('currency/fetchBaseCurrency', async (coords, thunkAPI) => {
  const state = thunkAPI.getState();
  const { baseCurrency } = state.currency;

  if (baseCurrency) {
    return thunkAPI.rejectWithValue('We already have base currency!');
  }
  try {
    const response = await getUserInfo(coords);
    return response.results[0].annotations.currency.iso_code;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchExchangeCurrency = createAsyncThunk<
  ExchangeResult, 
  { from: string; to: string; amount: number }, 
  { rejectValue: string }
>('currency/fetchExchangeCurrency', async (currency, thunkAPI) => {
  try {
    const data = await exchangeCurrency(currency);
    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchRates = createAsyncThunk<
  RatesArray, // ReturnType
  string, // ArgType (baseCurrency)
  { rejectValue: string }
>('currency/fetchLatestRates', async (baseCurrency, thunkAPI) => {
  try {
    const data = await latestRates(baseCurrency);

    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
