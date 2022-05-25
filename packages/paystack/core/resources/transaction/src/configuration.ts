import {
  Configuration,
  RequestMethod,
  ClientMethod,
  Amount,
  TransactionStatus,
  Currency,
  ConfiguredClient,
  AuthService,
} from '@technanimals/paystack-client';

export type Methods = 'initialize' | 'verify' | 'chargeAuthorization';

export const configuration: Configuration<Methods> = {
  initialize: {
    method: RequestMethod.POST,
    route: 'initialize',
  },
  verify: {
    method: RequestMethod.GET,
    route: 'verify/:reference',
  },
  chargeAuthorization: {
    method: RequestMethod.POST,
    route: 'charge_authorization',
  },
};
export const createClient = (authService: AuthService) =>
  new ConfiguredClient('transaction', configuration, authService).getClient<Client>();

export const createClientWithSecret = (secret: string) => {
  const authService = new AuthService(secret);

  return createClient(authService);
};

interface InitializeInput {
  /** */
  amount: Amount;
  /** */
  email: string;
}

interface InitializeResponse {
  authorization_url: string;
  access_code: string;
  reference: string;
}

interface VerifyInput {
  reference: string;
}

interface VerifyResponse {
  id: string | number;
  reference: string;
  status: TransactionStatus;
  currency: Currency;
  amount: Amount;
}

interface ChargeAuthorizationInput {
  amount: Amount;
  email: string;
  authorization_code: string;
}
interface ChargeAuthorizationResponse {
  amount: Amount;
  status: TransactionStatus;
  reference: string;
}
export interface Client {
  initialize: ClientMethod<InitializeInput, InitializeResponse>;
  verify: ClientMethod<VerifyInput, VerifyResponse>;
  chargeAuthorization: ClientMethod<ChargeAuthorizationInput, ChargeAuthorizationResponse>;
}
