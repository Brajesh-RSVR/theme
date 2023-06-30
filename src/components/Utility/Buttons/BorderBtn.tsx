import { PropsWithChildren } from 'react';

export interface BorderBtnProps {
  title: string;
  color: string;
}

export const BorderBtn = ({ title, color}: PropsWithChildren<BorderBtnProps>) => {
  return <button className={`${color} btn-border-primary`}>{title}</button>;
};
