import { ReactNode } from 'react';
import styles from './Heading.module.css';
import clsx from 'clsx';

type HeadingProps = {
  title?: string | ReactNode;
  top?: { [key: string]: string };
  bottom?: boolean;
  error?: boolean;
  info?: boolean;
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
