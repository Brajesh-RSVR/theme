import { PropsWithChildren } from 'react';

export interface CardContainerProps {
  paddingY?: number;
  paddingX?: number;
  shadowY?: number;
  shadowX?: number;
  shadowBlur?: number;
  shadowColor?: string;
  cardRadius?: number;
}

export const CardContainer = ({
  paddingY = 12,
  paddingX = 12,
  children,
  shadowY = 5,
  shadowX = 5,
  shadowBlur = 5,
  shadowColor = 'black',
  cardRadius = 10,
}: PropsWithChildren<CardContainerProps>) => {
  return (
    <div
      className={`w-full`}
      style={{
        paddingTop: `${paddingY}px`,
        paddingBottom: `${paddingY}px`,
        paddingLeft: `${paddingX}px`,
        paddingRight: `${paddingX}px`,
        boxShadow: `${shadowY}px ${shadowX}px ${shadowBlur}px ${shadowColor}`,
        borderRadius: cardRadius,
      }}
    >
      {children}
    </div>
  );
};
