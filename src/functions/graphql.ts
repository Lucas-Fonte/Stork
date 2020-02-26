import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-lambda';
import { buildSchema, Resolver, Query } from 'type-graphql';
import {
  Context, Callback, APIGatewayProxyResult,
} from 'aws-lambda';

@Resolver()
class HelloResolver {
  @Query(() => String)
  async hello() {
    return 'Hello world';
  }
}

const createHandler = async () => {
  const schema = await buildSchema({
    resolvers: [HelloResolver],
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
