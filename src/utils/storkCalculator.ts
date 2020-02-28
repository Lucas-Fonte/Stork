import { InterestRateNeededInfo } from '../../typings/types';
import { roadToReachGoal, calculateInterestRate } from './helpers';

export default function storkCalculator(interestRateNeededInfo: InterestRateNeededInfo) {
  const {
    EntryValue,
    interestRate,
    Time,
    MonthlyInput,
    FinancialGoal,
  } = interestRateNeededInfo;

  return {
    EntryValue,
    MonthlyInput,
    interestRate,
    Time,
    FinancialGoal,
    totalValue: calculateInterestRate(interestRateNeededInfo).toFixed(2),
    roadToReachGoal: roadToReachGoal(interestRateNeededInfo),
    years: (roadToReachGoal(interestRateNeededInfo) / 12).toFixed(2),
  };
}
