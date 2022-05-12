import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Card {
  /**
   *
   */
  number: string;
  /**
   *
   */
  expiryMonth: number;
  /**
   *
   */
  expiryYear: number;
  /**
   *
   */
  cvv: string;
}

export interface PaymentTransactionData {
  amount: number;
  currency: string;
  status: boolean;
  reference: string;
  domain: string;
}

export interface PaymentTransaction {
  status: boolean;
  message: string;
  data: PaymentTransactionData;
}

export interface Spec extends TurboModule {
  readonly getConstants: () => {};
  /**
   * Initializes the Paystack client with the supplied public key
   *
   * @param key
   */
  init(key: string): void;
  /**
   * Validates the details of the supplied card
   *
   * @param card - A valid credit/debit card
   */
  validateCard(card: Card): Promise<boolean>;
  /**
   * Charges the card using the supplied accessCode
   *
   * @param card - A valid credit/debit card
   * @param accessCode - The access code created by your server
   */
  chargeCard(card: Card, accessCode: string): Promise<PaymentTransaction>;
}

export default TurboModuleRegistry.get<Spec>('ReactPaystack');
