/* eslint-disable max-len */
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

export const roadToReachGoal = (interestRateNeededInfo: InterestRateNeededInfo) => {
  const {
    EntryValue, interestRate, MonthlyInput, FinancialGoal,
  } = interestRateNeededInfo;
  let totalValue = EntryValue;
  let i = 0;

  for (i; totalValue <= FinancialGoal; i++) {
    totalValue = totalValue * (1 + interestRate) + MonthlyInput;
  }

  return i;
};

export const timeout = async (miliseconds: number) => new Promise((resolve) => setTimeout(resolve, miliseconds));
