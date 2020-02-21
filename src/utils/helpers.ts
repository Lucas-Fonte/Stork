import { InterestRateNeededInfo } from '../../typings/types';

export const calculateInterestRate = (interestRateNeededInfo: InterestRateNeededInfo) => {
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
};

export const roadToMillion = (interestRateNeededInfo: InterestRateNeededInfo) => {
  const { EntryValue, interestRate, MonthlyInput } = interestRateNeededInfo;
  let totalValue = EntryValue;
  let i = 0;

  for (i; totalValue <= 1000000; i++) {
    totalValue = totalValue * (1 + interestRate) + MonthlyInput;
  }

  return i;
};
