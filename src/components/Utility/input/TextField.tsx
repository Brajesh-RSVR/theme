import { PropsWithChildren } from 'react';

export interface TextFieldProps {
  label?: string;
}

export const TextField = ({ label = 'placeholder' }: PropsWithChildren<TextFieldProps>) => {
  return (
    <form className='w-fit relative py-2'>
      <label htmlFor={label} className='absolute top-4 left-0'>{label}</label>
      <input type="text" id="fname" name="fname" className='main-input' />
    </form>
  );
};
