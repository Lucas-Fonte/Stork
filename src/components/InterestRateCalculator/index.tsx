/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import React from 'react';
import { Container } from './styles';
import { storkCalculator } from '../../utils/interestRateCalculator';

export default function InterestRateCalculator() {
  const interestRateNeededInfo = {
    EntryValue: 10000,
    interestRate: 0.01,
    Time: 12,
    MonthlyInput: 2850,
  };


  return (
    <Container>
      <h1>InterestRateCalculator</h1>
      <button
        style={{ marginLeft: 30, width: 100, height: 50 }}
        onClick={() => console.log(storkCalculator(interestRateNeededInfo))}
      >
        teste
      </button>
    </Container>
  );
}
