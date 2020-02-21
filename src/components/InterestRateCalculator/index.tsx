import React, { useRef, useState } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import axios from 'axios';
import { InterestRateNeededInfo } from '../../../typings/types';
import { Container } from './styles';

import Input from '../_unform/Input';
import SubmitButton from '../_unform/Button';

const InterestRateCalculator: React.FC = () => {
  const [result, setResult] = useState<InterestRateNeededInfo>();

  const formRef = useRef<FormHandles>(null);
  const handleSubmit: SubmitHandler<InterestRateNeededInfo> = async (data) => {
    const api = await axios.get('/.netlify/functions/calculate');
    setResult(api.data);
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
