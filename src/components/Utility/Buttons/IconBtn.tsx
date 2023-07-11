import { PropsWithChildren } from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export interface IconBtnTextProps {
  title: string;
  color: string;
  iconColor?: string;
  iconPosition?: 'top' | 'bottom' | 'start' | 'end';
  spacing?: 1 | 2 | 3 | 4 | number;
  disable?: Boolean;
  loading?: Boolean;
  textSize?: number;
}

export const IconBtnText = ({
  title,
  color,
  children,
  iconPosition,
  iconColor = 'primary',
  spacing,
  disable = false,
  loading = false,
  textSize = 1,
}: PropsWithChildren<IconBtnTextProps>) => {
  const paddingApply = () => {
    if (iconPosition === 'top') {
      return `marbt-${spacing}`;
    } else if (iconPosition === 'bottom') {
      return `marto-${spacing}`;
    } else if (iconPosition === 'start') {
      return `marri-${spacing}`;
    } else if (iconPosition === 'end') {
      return `marle-${spacing}`;
    }
  };

  const fontSize = () => {
    return textSize * 16;
  }

  return (
    <button className={`${color} ${disable && 'disable'} btn-border-primary ${iconPosition} `} style={{ fontSize: fontSize()}}>
      {loading ? (
        <span className={`${paddingApply()} animate-spin`}><AiOutlineLoading3Quarters /></span>
      ) : (
        <span className={`${iconColor} ${paddingApply()} iconbtn`}>{children}</span>
      )}
      {title}
    </button>
  );
};
