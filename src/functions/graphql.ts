import { ApolloServer } from 'apollo-server-lambda';
import { InterestRateNeededInfoEntity } from './Graphql/entity/InterestRateNeededInfoEntity';
import { StorkCalculatorResolver } from './Graphql/resolvers/StorkCalculatorResolver';

const server = new ApolloServer({
  typeDefs: InterestRateNeededInfoEntity,
  resolvers: StorkCalculatorResolver,
  introspection: true,
  playground: true,
});

export const handler = server.createHandler();
