import { PropsWithChildren } from 'react';

export interface IconBtnTextProps {
  title: string;
  color: string;
  iconColor?: string;
  iconPosition?: 'top' | 'bottom' | 'start' | 'end';
  spacing?: 1 | 2 | 3 | number;
}

export const IconBtnText = ({
  title,
  color,
  children,
  iconPosition,
  iconColor = 'primary',
  spacing,
}: PropsWithChildren<IconBtnTextProps>) => {

    const paddingApply = () => {
    if (iconPosition === 'top') {
      return `pb-${spacing}`;
    } else if (iconPosition === 'bottom') {
      return `pt-${spacing}`;
    } else if (iconPosition === 'start') {
      return `pr-${spacing}`;
    } else if (iconPosition === 'end') {
      return `pl-${spacing}`;
    }
  };

  return (
    <button className={`${color} btn-border-primary ${iconPosition}`}>
      <span
        className={`${iconColor} ${paddingApply()} iconbtn `}
      >
        {children}
      </span>
      {title}
    </button>
  );
};
