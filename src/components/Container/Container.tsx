import styled from './Container.module.css';
type ChildrenProps = {
  children: React.ReactNode; 
};
export const Container = ({ children }: ChildrenProps) => {
  return <div className={styled.container}>{children}</div>;
};
