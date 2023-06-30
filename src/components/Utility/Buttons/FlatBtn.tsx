import { PropsWithChildren } from 'react';

export interface FlatBtnProps {
  title: string;
  color: string;
}

export const FlatBtn = ({ title, color}: PropsWithChildren<FlatBtnProps>) => {
  return <button className={`${color} flatbtn primary-hover`}>{title}</button>;
};
