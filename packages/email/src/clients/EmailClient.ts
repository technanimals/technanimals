import querystring from 'querystring';

export abstract class EmailClient {
  /**
   * Parses query string into an object
   *
   * @param configString - A string in the shape of a querystring
   * @returns An Object with the key-value pairs from the query string
   */
  static parseConfigString(configString: string): Record<string, string> {
    const config = querystring.parse(configString);

    return config as Record<string, string>;
  }

  /**
   * Sends an email to the relevant service provider
   *
   * @param input - Input needed to send an email
   */
  abstract send(input: SendEmailInput): Promise<any>;
}

export interface SendEmailInput {
  /**
   * The destination email address
   */
  to: string;
  /**
   * Where the email is sent from
   */
  from: string;
  /**
   * The html representation of the email being sent
   */
  html: string;
  /**
   * The subject that will be shown to the recipient of the email
   */
  subject: string;
}

export type SendEmail = (input: SendEmailInput) => Promise<any>;

export type ClientCreator = (configString: string) => EmailClient;
