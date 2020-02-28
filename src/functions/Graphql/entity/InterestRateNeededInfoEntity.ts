import { gql } from 'apollo-server-lambda';


export const InterestRateNeededInfoEntity = gql`
  type Query {
    hello: String
  }

  type Mutation {
    startCalculator(
      EntryValue: Float
      interestRate: Float
      Time: Float
      MonthlyInput: Float
      FinancialGoal: Float
    ): String
  }
`;

// export const InterestRateNeededInfoEntity = gql`
//   type Query {
//     hello: String
//   }

//   type Mutation {
//     startCalculator(
//         EntryValue: String,
//         interestRate: String,
//         Time: String,
//         MonthlyInput: String,
//         FinancialGoal:String
//     ): String
//   }
// `;
