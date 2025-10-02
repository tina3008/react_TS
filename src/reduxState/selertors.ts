import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from './store';

export const selectBaseCurrency = (state: RootState) => state.currency.baseCurrency;
export const selectExchangeInfo = (state: RootState) => state.currency.exchangeInfo;
export const selectIsLoading = (state: RootState) => state.currency.isLoading;
export const selectIsError = (state: RootState) => state.currency.isError;
export const selectRates = (state: RootState) => state.currency.rates;
export const selectFilter = (state: RootState) => state.filter.value;

export const selectFilteredRates = createSelector(
  [selectBaseCurrency, selectRates, selectFilter],
  (baseCurrency, rates, filter) => {
    return rates
      .filter(
        ([key]) => key !== baseCurrency && key.toLowerCase().includes(filter),
      )
      .map(([key, value]) => ({ key, value: Number((1 / value).toFixed(2)) }));
  },
);
