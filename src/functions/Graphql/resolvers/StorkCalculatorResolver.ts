import 'reflect-metadata';
import {
  Resolver, Query, Mutation, Arg,
} from 'type-graphql';
import { InterestRateNeededInfoEntity } from '../entity/InterestRateNeededInfoEntity';

@Resolver()
export class StorkCalculatorResolver {
  @Query(() => String)
  async calculator() {
    // const teste = await EntryValue;
    return 'ok';
  }

  @Mutation(() => String)
  async calculate() {
    // const teste = await EntryValue;
    return 'ok';
  }
}

// @Mutation(() => InterestRateNeededInfoEntity)
// async calculate(
//   @Arg('EntryValue') EntryValue: number,
//   @Arg('interestRate') interestRate: number,
//   @Arg('Time') Time: number,
//   @Arg('MonthlyInput') MonthlyInput: number,
//   @Arg('FinancialGoal') FinancialGoal: number,
// ): Promise<InterestRateNeededInfoEntity> {
//   const result = {
//     EntryValue,
//     interestRate,
//     Time,
//     MonthlyInput,
//     FinancialGoal,
//   };

//   return result;
// }
