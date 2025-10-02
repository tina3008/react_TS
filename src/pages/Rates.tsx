import { Wave } from 'react-animated-text';

import {
  Container,
  Filter,
  Heading,
  Loader,
  RatesList,
  Section,
} from '../components/index';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
  selectBaseCurrency,
  selectFilteredRates,
  selectIsError,
  selectIsLoading,
  selectRates,
} from '../reduxState/selertors';
import { useEffect } from 'react';
import { fetchRates } from '../reduxState/operations';
import type { RootState, AppDispatch } from '../reduxState/store';

  export const useAppDispatch: () => AppDispatch = useDispatch;
  export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const Rates = () => {
  const dispatch = useAppDispatch();
  const isError = useAppSelector(selectIsError);
  const isLoading = useAppSelector(selectIsLoading);
  const baseCurrency = useAppSelector(selectBaseCurrency);
  const filteredRates = useAppSelector(selectFilteredRates);
  const rates = useAppSelector(selectRates);

  useEffect(() => {
    dispatch(fetchRates(baseCurrency));
  }, [baseCurrency, dispatch]);
  
  return (
    <Section>
      <Container>
        <Heading
          info
          bottom
          title={
            <Wave
              text={`$ $ $ Current exchange rate for 1 ${'UAH'} $ $ $`}
              effect="fadeOut"
              effectChange={4.0}
            />
          }
        />
        {rates.length > 0 && <Filter />}
        {filteredRates.length > 0 && <RatesList rates={filteredRates} />}
        {isLoading && <Loader />}
        {isError && (
          <Heading
            error
            title="Something went wrong...😐 We cannot show current rates!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Rates;
