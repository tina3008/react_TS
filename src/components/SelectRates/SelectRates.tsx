import Select, { SingleValue } from 'react-select';

import symbols from './symbols.json';
import styles from './SelectRates.module.css';

import './ReactSelect.css';
import { useDispatch } from 'react-redux';
import { setBaseCurrency } from '../../reduxState/currencySlice';

import { useAppDispatch } from '../Filter/Filter';

type SelectRatesProps = {
  baseCurrency: string;
};
export const SelectRates = ({ baseCurrency }: SelectRatesProps) => {

    type OptionType = { value: string; label: string };

    const handleChange = (option: SingleValue<OptionType>) => {
      if (option) {
        dispatch(setBaseCurrency(option.value));
      }
  };
  
  const dispatch = useAppDispatch();

  return (
    <div className={styles.box}>
      <p className={styles.text}>Your base currency:&nbsp;</p>
      <Select
        className={styles.select}
        classNamePrefix="react-select"
        isSearchable
        value={{
          label: baseCurrency,
          value: baseCurrency,
        }}
        options={symbols}
        onChange={handleChange}
      />
    </div>
  );
};
