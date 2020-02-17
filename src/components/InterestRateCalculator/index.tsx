import React from 'react';
import { Container } from './styles';
import { storkCalculator } from '../../utils/interestRateCalculator';

export default function InterestRateCalculator() {

  const interestRateNeededInfo = {
        EntryValue: 10000,
        interestRate: 0.01,
        Time: 12,
        MonthlyInput: 2850
  };


  return (
    <Container>
      <h1>InterestRateCalculator</h1>
      <div style={{ background : '#fff'}}>
        <button onClick={() => console.log(storkCalculator(interestRateNeededInfo))}>teste</button>
      </div>
    </Container>
  );
}
