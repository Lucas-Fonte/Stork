/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import { Button } from './styles';

interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    label: string;
}

export default function SubmitButton({ label, ...rest }: SubmitButtonProps) {
  return (
    <Button {...rest}>{label}</Button>
  );
}

SubmitButton.defaultProps = {
  type: 'button',
};
