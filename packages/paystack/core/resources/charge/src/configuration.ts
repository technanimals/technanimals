import {
  Configuration,
  RequestMethod,
  ClientMethod,
  PaystackMetadata,
  PaymentChannel,
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
