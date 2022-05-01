import * as charge from '@technanimals/paystack-charge';
import { ConfiguredClient, AuthService } from '@technanimals/paystack-client';

/**
 *
 * @param secret
 * @returns
 */
export function createPaystackClient(secret: string) {
  const authService = new AuthService(secret);

  return {
    charge: new ConfiguredClient(
      'charge',
      charge.configuration,
      authService
    ).getClient<charge.Client>(),
  };
}
