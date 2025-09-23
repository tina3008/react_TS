import style from './Grid.module.css';
type GridProps = {
  children: React.ReactNode;
};
export const Grid = ({ children }: GridProps) => {
  return <ul className={style.list}>{children}</ul>;
};
