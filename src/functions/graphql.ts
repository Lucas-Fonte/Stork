import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-lambda';
import { buildSchema } from 'type-graphql';
import {
  Context, Callback, APIGatewayProxyResult,
} from 'aws-lambda';
import { StorkCalculatorResolver } from './Graphql/resolvers/StorkCalculatorResolver';


const createHandler = async () => {
  const schema = await buildSchema({
    resolvers: [StorkCalculatorResolver],
  });

  const server = new ApolloServer({
    schema,
    playground: true,
  });

  return server.createHandler();
};

export const handler = (
  event: AWSLambda.APIGatewayProxyEvent,
  context: Context,
  callback: Callback<APIGatewayProxyResult>,
) => {
  createHandler().then((graphqlHandler) => graphqlHandler(event, context, callback));
};
