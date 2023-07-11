import { PropsWithChildren } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export interface BorderBtnProps {
  title: string;
  color: string;
  disable?: Boolean;
  loading?: Boolean;
}

export const BorderBtn = ({ title, color, disable = false, loading = false }: PropsWithChildren<BorderBtnProps>) => {
  return (
    <>
      {loading ? (
        <button className={`${color} ${disable && 'disable'} btn-border-primary`}>
          <AiOutlineLoading3Quarters className="animate-spin" />
        </button>
      ) : (
        <button className={`${color} ${disable && 'disable'} btn-border-primary`}>{title}</button>
      )}
    </>
  );
};
