import { Grid, GridItem } from 'components/index';
import styles from './RatesList.module.css';

type RatesListProps = {
  rates: { key: string; value: number }[];
};

export const RatesList = ({ rates }: RatesListProps) => {
  return (
    <Grid>
      {rates.map(({ key, value }) => (
        <GridItem key={key}>
          <p className={styles.text}>
            1 {key} = {value}
          </p>
        </GridItem>
      ))}
    </Grid>
  );
};
