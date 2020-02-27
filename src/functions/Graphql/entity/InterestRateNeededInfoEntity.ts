import { ObjectType, Field } from 'type-graphql';

@ObjectType()
class InterestRateNeededInfoEntity {
  @Field()
  EntryValue: number | undefined;

  @Field()
  interestRate: number | undefined;

  @Field()
  Time: number | undefined;

  @Field()
  MonthlyInput: number | undefined;

  @Field()
  FinancialGoal: number | undefined;
}

export { InterestRateNeededInfoEntity };
