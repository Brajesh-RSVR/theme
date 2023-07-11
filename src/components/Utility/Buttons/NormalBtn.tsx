import { PropsWithChildren } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export interface NormalBtnProps {
  title: string;
  color: string;
  disable?: Boolean;
  loading?: Boolean;
}

export const NormalBtn = ({ title, color, disable = false, loading = false }: PropsWithChildren<NormalBtnProps>) => {
  return (
    <>
      {loading ? (
        <button className={`${color} ${disable && 'disable'} btn-primary`}>
          <AiOutlineLoading3Quarters className="animate-spin" />
        </button>
      ) : (
      <button className={`${color} ${disable && 'disable'} btn-primary`}>{title}</button>
      )}
    </>
  );
};
