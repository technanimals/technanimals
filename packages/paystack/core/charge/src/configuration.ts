import { Configuration, RequestMethod, ClientMethod } from '@technanimals/paystack-client';

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

export interface CreateChargeInput {
  /** */
  amount: number;
  /** */
  email: string;
}

export interface Client {
  create: ClientMethod<CreateChargeInput, {}>;
  checkPending: ClientMethod<{}, {}>;
}
