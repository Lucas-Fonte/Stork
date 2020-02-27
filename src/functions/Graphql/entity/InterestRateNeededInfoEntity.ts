import { gql } from "apollo-server-lambda";

export const InterestRateNeededInfoEntity = gql`
  type Query {
    hello: String
  }

  type Mutation {
    setMessage(message: String): String
  }
`;


