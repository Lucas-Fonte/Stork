import { InterestRateNeededInfo } from '../../typings/types';

function calculateInterestRate(interestRateNeededInfo: InterestRateNeededInfo) {
  const {
    EntryValue,
    interestRate,
    Time = 1,
    MonthlyInput,
  } = interestRateNeededInfo;
  let totalValue = EntryValue;

  for (let i = 1; i <= Time; i++) {
    totalValue = totalValue * (1 + interestRate) + MonthlyInput;
  }

  return totalValue;
}

function roadToMillion(interestRateNeededInfo: InterestRateNeededInfo) {
  const { EntryValue, interestRate, MonthlyInput } = interestRateNeededInfo;
  let totalValue = EntryValue;
  let i = 0;

  for (i; totalValue <= 1000000; i++) {
    totalValue = totalValue * (1 + interestRate) + MonthlyInput;
  }

  return i;
}

function storkCalculator(interestRateNeededInfo: InterestRateNeededInfo) {
  const {
    EntryValue,
    interestRate,
    Time,
    MonthlyInput,
  } = interestRateNeededInfo;

  console.log({
    teste: interestRateNeededInfo,
    totalValue: calculateInterestRate(interestRateNeededInfo),
    roadToMillion: roadToMillion(interestRateNeededInfo),
    years: (roadToMillion(interestRateNeededInfo) / 12).toFixed(2),
  });
  return {
    EntryValue,
    MonthlyInput,
    interestRate,
    Time,
    totalValue: calculateInterestRate(interestRateNeededInfo),
    roadToMillion: roadToMillion(interestRateNeededInfo),
    years: (roadToMillion(interestRateNeededInfo) / 12).toFixed(2),
  };
}

export { storkCalculator };
