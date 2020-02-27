import React, { useRef, useState } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { gql } from 'apollo-boost';
import { InterestRateNeededInfo } from '../../../typings/types';
import { Container } from './styles';

import Input from '../_unform/Input';
import SubmitButton from '../_unform/Button';
import { client } from '../../graphqlClient';

const InterestRateCalculator: React.FC = () => {
  const [result, setResult] = useState<InterestRateNeededInfo>();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<InterestRateNeededInfo> = async (formData) => {
    const { EntryValue, interestRate, Time, MonthlyInput, FinancialGoal}  = formData;
    const response: any = await client.query({
      query: gql`
        mutation {
          startCalculator(
            EntryValue: ${EntryValue},
            interestRate: ${interestRate},
            Time: ${Time},
            MonthlyInput: ${MonthlyInput},
            FinancialGoal: ${FinancialGoal},
          )
        }
        `,
    });

    setResult(response.data);
  };


  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="EntryValue" label="Initial Value" required />
        <Input name="interestRate" label="Interest Rate" required />
        <Input name="Time" label="Time" required />
        <Input name="MonthlyInput" label="Monthly Input" required />
        <SubmitButton type="submit" label="Submit" />
      </Form>
      <p>{JSON.stringify(result, null, 4)}</p>
    </Container>

  );
};
export default InterestRateCalculator;
