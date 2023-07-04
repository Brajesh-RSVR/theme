import { PropsWithChildren } from 'react';

export interface FlatBtnProps {
  title: string;
  color: string;
  disable?: Boolean;
}

export const FlatBtn = ({ title, color, disable = false }: PropsWithChildren<FlatBtnProps>) => {
  return <button className={`${color} ${disable && 'disable'} flatbtn primary-hover`}>{title}</button>;
};
