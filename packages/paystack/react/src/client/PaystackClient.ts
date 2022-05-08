import { NativeModules } from 'react-native';

const Paystack: RNPaystack = NativeModules.RNPaystack;

/**
 * PaystackClient is a Singleton class
 */
export class PaystackClient {
  /**
   * The instance of the client since it can only be create once
   */
  static instance: PaystackClient;
  /**
   *
   * @param publicKey
   * @returns
   */
  static getInstance(publicKey: string): PaystackClient {
    if (!PaystackClient.instance) {
      PaystackClient.instance = new PaystackClient(publicKey);
    }
    return PaystackClient.instance;
  }

  /**
   *
   * @param publicKey
   */
  public constructor(private readonly publicKey: string) {
    Paystack.init(this.publicKey);
  }
}

interface RNPaystack {
  init(publicKey: string): void;
}
