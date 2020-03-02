/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { InterestRateNeededInfo } from '../../../typings/types';
import { Container } from './styles';

import Input from '../_unform/Input';
import SubmitButton from '../_unform/Button';
import { Modal } from '../Modal';

const START_CALCULATOR = gql`
  mutation startCalculator(
      $EntryValue: Float, 
      $interestRate: Float,
      $Time: Float,
      $MonthlyInput: Float,
      $FinancialGoal:Float
      
    ) {
      startCalculator(
        EntryValue: $EntryValue,
        interestRate: $interestRate,
        Time: $Time,
        MonthlyInput: $MonthlyInput,
        FinancialGoal: $FinancialGoal
    )
  }
`;
const InterestRateCalculator: React.FC = () => {
  const [result, setResult] = useState();
  const [modal, setModal] = useState(false);
  const [testeMutation] = useMutation(START_CALCULATOR);

  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<InterestRateNeededInfo> = async (formData) => {
    const {
      EntryValue, interestRate, Time, MonthlyInput, FinancialGoal,
    } = formData;

    const response: any = await testeMutation({
      variables: {
        EntryValue: parseFloat(EntryValue.toString()),
        interestRate: parseFloat(interestRate.toString()),
        Time: parseFloat(Time.toString()),
        MonthlyInput: parseFloat(MonthlyInput.toString()),
        FinancialGoal: parseFloat(FinancialGoal.toString()),
      },
    });

    setModal(true);
    const thisData = JSON.parse(response.data.startCalculator);
    setResult(thisData);
  };


  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="EntryValue" label="Initial Value" required defaultValue={10000} />
        <Input name="interestRate" label="Interest Rate" required defaultValue={0.01} />
        <Input name="Time" label="Time" required defaultValue={12} />
        <Input name="MonthlyInput" label="Monthly Input" required defaultValue={2850} />
        <Input name="FinancialGoal" label="Financial Goal" required defaultValue={1000000} />
        <SubmitButton type="submit" label="Submit" />
      </Form>
      <Modal data={JSON.stringify(result, null, 4)} showing={modal} />
    </Container>

  );
};
export default InterestRateCalculator;
