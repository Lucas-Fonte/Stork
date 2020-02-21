import {
  Handler, Context, Callback, APIGatewayEvent,
} from 'aws-lambda';
import storkCalculator from './utils/storkCalculator';

interface CalculateResponse {
  statusCode: number;
  body: string;
}

const handler: Handler = (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback,
) => {
  const response: CalculateResponse = {
    statusCode: 200,
    body: JSON.stringify({
      calculated: storkCalculator({
        EntryValue: 10000, interestRate: 1, Time: 12, MonthlyInput: 2850,
      }),
    }),
  };

  callback(undefined, response);
};

export { handler };
