import {
  Configuration,
  RequestMethod,
  ClientMethod,
  PaystackMetadata,
  PaymentChannel,
  AuthService,
  ConfiguredClient,
} from '@technanimals/paystack-client';

export type Methods = 'create' | 'checkPending';

export const configuration: Configuration<Methods> = {
  create: {
    method: RequestMethod.POST,
    route: '',
  },
  checkPending: {
    method: RequestMethod.GET,
    route: ':reference',
  },
};
export const createClient = (authService: AuthService) =>
  new ConfiguredClient('charge', configuration, authService).getClient<Client>();

export const createClientWithSecret = (secret: string) => {
  const authService = new AuthService(secret);

  return createClient(authService);
};

type CreateChargeInput = {
  /** */
  amount: number;
  /** */
  email: string;
  /** */
  device_id?: string;
  /** */
  metadata?: PaystackMetadata;
  /** */
  reference?: string;
  /** */
  pin?: string;
} & PaymentChannel;

export interface Client {
  create: ClientMethod<CreateChargeInput, {}>;
  checkPending: ClientMethod<{}, {}>;
}
