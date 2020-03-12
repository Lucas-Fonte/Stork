/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { FaChevronDown } from 'react-icons/fa';
import { InterestRateNeededInfo } from '../../../typings/types';
import { Container, ModalLoaderHandler, Modal } from './styles';

import Input from '../_unform/Input';
import SubmitButton from '../_unform/Button';
import { timeout } from '../../utils/helpers';

interface InterestRateResult {
  EntryValue: number;
  interestRate: number;
  Time: number;
  MonthlyInput: number;
  FinancialGoal: number;
}

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
  const [result, setResult] = useState<any | null>();
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [calculatorMutation] = useMutation(START_CALCULATOR);

  const formRef = useRef<FormHandles>(null);

  const toggleModal = (status: boolean) => (status ? setModal(false) : setModal(true));

  const handleSubmit: SubmitHandler<InterestRateNeededInfo> = async (formData) => {
    setLoading(true);
    const {
      EntryValue, interestRate, Time, MonthlyInput, FinancialGoal,
    } = formData;

    const response: any = await calculatorMutation({
      variables: {
        EntryValue: parseFloat(EntryValue.toString()),
        interestRate: parseFloat(interestRate.toString()),
        Time: parseFloat(Time.toString()),
        MonthlyInput: parseFloat(MonthlyInput.toString()),
        FinancialGoal: parseFloat(FinancialGoal.toString()),
      },
    });

    await timeout(1000);
    setLoading(false);
    const thisData = JSON.parse(response.data.startCalculator);

    setResult(thisData);
    toggleModal(modal);
  };


  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="EntryValue" label="Initial Value" required defaultValue={10000} />
        <Input name="interestRate" label="Interest Rate" required defaultValue={0.01} />
        <Input name="Time" label="Time" required defaultValue={12} />
        <Input name="MonthlyInput" label="Monthly Input" required defaultValue={2850} />
        <Input name="FinancialGoal" label="Financial Goal" required defaultValue={1000000} />
        <SubmitButton type="submit" label="Submit" loading={loading} />
      </Form>
      <ModalLoaderHandler opacity={modal ? 1 : 0}>
        <Modal>
          <ul>
            { result
              ? Object.keys(result).map((key) => <li key={key}>{`${key} : ${result[key]}`}</li>)
              : null}
          </ul>
          <FaChevronDown onClick={() => toggleModal(modal)} />
        </Modal>
      </ModalLoaderHandler>
    </Container>

  );
};
export default InterestRateCalculator;
