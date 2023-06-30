import { PropsWithChildren } from 'react';

export interface NormalBtnProps {
  title: string;
  color: string;
}

export const NormalBtn = ({ title, color}: PropsWithChildren<NormalBtnProps>) => {
  return <button className={`${color} btn-primary`}>{title}</button>;
};
