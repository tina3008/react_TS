import styles from './Heading.module.css';
import clsx from 'clsx';

type HeadingProps = {
  title: string;
  top: { [key: string]: string };
  bottom: { [key: string]: string };
  error: { [key: string]: string };
  info: { [key: string]: string };
};
export const Heading = ({ title, top, bottom, error, info }: HeadingProps) => {
  return (
    <h2
      className={clsx(styles.title, {
        [styles.top]: top,
        [styles.bottom]: bottom,
        [styles.error]: error,
        [styles.info]: info,
      })}
    >
      {title}
    </h2>
  );
};
