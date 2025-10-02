import {
  Container,
  ExchangeForm,
  ExchangeInfo,
  ExchangeInfoProps,
  Heading,
  Loader,
  Section,
} from '../components/index';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import {
  selectExchangeInfo,
  selectIsError,
  selectIsLoading,
} from '../reduxState/selertors';
import type { RootState, AppDispatch } from '../reduxState/store';

const Home = () => {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const exchangeInfo = useAppSelector(selectExchangeInfo)as ExchangeInfoProps | null;
  const isError = useAppSelector(selectIsError);
  const isLoading = useAppSelector(selectIsLoading);

  return (
    <Section>
      <Container>
        <ExchangeForm />
        {!exchangeInfo && !isError && (     
          <Heading info title="What currencies do you want to exchange?🙂" />
        )}
        {exchangeInfo && <ExchangeInfo {...exchangeInfo} />}
        {isLoading && <Loader />}
        {isError && (
          <Heading
            error
            title="Something went wrong...😐 Check the data validity and try again!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Home;
