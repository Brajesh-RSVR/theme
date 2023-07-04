import { PropsWithChildren } from 'react';

export interface BorderBtnProps {
  title: string;
  color: string;
  disable?: Boolean;
}

export const BorderBtn = ({ title, color, disable = false}: PropsWithChildren<BorderBtnProps>) => {
  return <button className={`${color} ${disable && 'disable'} btn-border-primary`}>{title}</button>;
};
