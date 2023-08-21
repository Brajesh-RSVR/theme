import { PropsWithChildren } from 'react';

export interface ProblemShowProps {
    paddignNum?: number;
  }

export const ProblemShow = ({ paddignNum = 4 }: PropsWithChildren<ProblemShowProps>) => {
  return (
    <div className={`py-8 my-${paddignNum} my-1`}>problem</div>
  )
}
