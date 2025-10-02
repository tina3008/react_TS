import { RiExchangeDollarFill } from 'react-icons/ri';
import { fetchExchangeCurrency } from '../../reduxState/operations';
import { useDispatch } from 'react-redux';
import styles from './ExchangeForm.module.css';
import { useAppDispatch } from 'pages/Rates';
import { FormEvent } from 'react';


export const ExchangeForm = () => {
  const dispatch = useAppDispatch();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     const form = e.currentTarget;
     const input = form.elements.namedItem('currency') as HTMLInputElement;

    if (!input) return;
    const [amountStr, from, , to] = input.value.split(' ');
    const amount = Number(amountStr);
    dispatch(fetchExchangeCurrency({ amount, from, to }));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.button} type="submit">
        <RiExchangeDollarFill className={styles.icon} />
      </button>

      <input
        title="Request format 15 USD in UAH"
        className={styles.input}
        pattern="^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$"
        placeholder="15 USD in UAH"
        name="currency"
        required
      />
    </form>
  );
};
