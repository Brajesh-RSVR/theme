import { PropsWithChildren } from 'react';

export interface NormalBtnProps {
  title: string;
  color: string;
  disable?: Boolean;
}

export const NormalBtn = ({ title, color, disable = false }: PropsWithChildren<NormalBtnProps>) => {
  return <button className={`${color} ${disable && 'disable'} btn-primary`}>{title}</button>;
};
