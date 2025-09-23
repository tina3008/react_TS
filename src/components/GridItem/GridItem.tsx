import style from './GridItem.module.css';

type GridItemProps = {
  children: React.ReactNode;
};

export const GridItem = ({ children }: GridItemProps) => {
  return <li className={style.item}>{children}</li>;
};
