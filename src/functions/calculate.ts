import {
  Handler, Context, Callback, APIGatewayEvent,
} from 'aws-lambda';
import storkCalculator from '../utils/storkCalculator';

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
        EntryValue: 10000, interestRate: 0.01, Time: 1, MonthlyInput: 2850,
      }),
      event,
    }),
  };

  callback(undefined, response);
};

export { handler };
