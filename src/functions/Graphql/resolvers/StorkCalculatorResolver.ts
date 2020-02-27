export const StorkCalculatorResolver = {
  Query: {
    hello: () => {
      return "Hello from this guy";
    }
  },
  Mutation: {
      setMessage: (parameters: any, args: any, context: any) => {
          return args.message
      }
  }
};

