import storkCalculator from "../../../utils/storkCalculator";

export const StorkCalculatorResolver = {
  Query: {
    hello: () => {
      return "Hello from this guy";
    }
  },
  Mutation: {
    startCalculator: (parameters: any, args: any, context: any) => {
        return JSON.stringify(storkCalculator(args));
    }
  }
};

