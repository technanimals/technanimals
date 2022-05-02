export enum Currency {
  AMERICAN_DOLLAR = 'USD',
  SOUTH_AFRICAN_RAND = 'ZAR',
  NIGERIAN_NAIRA = 'NGN',
  GHANAIAN_CEDI = 'GHS',
}
export interface Bank {
  code: string;
  account_number: string;
}

export interface USSD {
  name: string;
}

export interface MobileMoney {
  name: string;
}

export interface BankChannel {
  bank: Bank;
}

export interface USSDChannel {
  ussd: USSD;
}

export interface MobileMoneyChannel {
  mobile_money: MobileMoney;
}

export interface AuthorizedChannel {
  authorization_code: string;
}

export type PaymentChannel = BankChannel | USSDChannel | MobileMoneyChannel | AuthorizedChannel;

interface CustomField {
  value: string | number;
  display_name: string;
  variable_name: string;
}

export interface PaystackMetadata {
  custom_fields: CustomField[];
}

export interface Payment {
  /** */
  amount: number;
  /** */
  email: string;
  /** */
  device_id?: string;
  /** */
  currency?: Currency;
  /** */
  metadata?: PaystackMetadata;
  /** */
  reference?: string;
}

export interface PageParams {
  perPage: number;
  page: number;
  from: Date;
  to: Date;
}
