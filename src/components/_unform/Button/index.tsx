/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { Button } from './styles';

interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    label: string;
    loading: boolean;
}

export default function SubmitButton({ label, loading }: SubmitButtonProps) {
  return (
    <>
      <Button type="button" isLoading={loading}>
        {loading ? <FaSpinner style={{ color: '#fff' }} />
          : label}
      </Button>
    </>
  );
}


