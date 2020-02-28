/* eslint-disable max-len */
import storkCalculator from '../../../utils/storkCalculator';

export const StorkCalculatorResolver = {
  Query: {
    hello: () => 'Hello from the Stork Calculator',
  },
  Mutation: {
    startCalculator: (parameters: any, args: any, context: any) => JSON.stringify(storkCalculator(args)),
  },
};
