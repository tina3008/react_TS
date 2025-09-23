import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  fetchBaseCurrency,
  fetchExchangeCurrency,
  fetchRates,
} from './operations';

interface ExchangeInfo {
  [key: string]: any;
}
interface CurrencyState {
  baseCurrency: string;
  exchangeInfo: ExchangeInfo | null;
  isLoading: boolean;
  isError: string | null;
  rates: [string, number][];
}

const initialState: CurrencyState = {
  baseCurrency: '',
  exchangeInfo: null,
  isLoading: false,
  isError: null,
  rates: [],
};

const slice = createSlice({
  name: 'currency',
  initialState,

  reducers: {
    setBaseCurrency: (state, action: PayloadAction<string>) => {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(
        fetchBaseCurrency.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.baseCurrency = action.payload;
        },
      )
      .addCase(fetchExchangeCurrency.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(
        fetchExchangeCurrency.fulfilled,
        (state, action: PayloadAction<ExchangeInfo>) => {
          state.exchangeInfo = action.payload;
          state.isLoading = false;
        },
      )
      .addCase(
        fetchExchangeCurrency.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.isError = action.payload;
        },
      )
      .addCase(fetchRates.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(
        fetchRates.fulfilled,
        (state, action: PayloadAction<[string, number][]>) => {
          state.rates = action.payload;
          state.isLoading = false;
        },
      )
      .addCase(fetchRates.rejected, (state, action: PayloadAction<any>) => {
        state.isError = action.payload;
        state.isLoading = false;
      });
  },
});

export const { setBaseCurrency } = slice.actions;

export const currencyReducer = slice.reducer;
