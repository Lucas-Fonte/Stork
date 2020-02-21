import { InterestRateNeededInfo } from '../../typings/types';
import { roadToMillion, calculateInterestRate } from './helpers';

export default function storkCalculator(interestRateNeededInfo: InterestRateNeededInfo) {
  const {
    EntryValue,
    interestRate,
    Time,
    MonthlyInput,
  } = interestRateNeededInfo;

  return {
    EntryValue,
    MonthlyInput,
    interestRate,
    Time,
    totalValue: calculateInterestRate(interestRateNeededInfo).toFixed(2),
    roadToMillion: roadToMillion(interestRateNeededInfo),
    years: (roadToMillion(interestRateNeededInfo) / 12).toFixed(2),
  };
}
