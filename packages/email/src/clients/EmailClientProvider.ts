import { ClientCreator, EmailClient } from './EmailClient';
import { SendgridClient } from './SendgridClient';

const clients: Record<string, ClientCreator | undefined> = {
  sendgrid: SendgridClient.fromConfigString,
};

export enum ErrorMessages {
  UnsupportedClient = '[client] client is not supported',
}

export class EmailClientProvider {
  /**
   * Creates an email client from the provided uri.
   * Throws an error when the client cannot be created from the uri
   *
   * @param uri - A string with format
   *  `clientName://configProperty=configPropertyValue&anotherConfigProperty=anotherConfigValue`
   * @returns An email client
   */
  static fromClientURI(uri: string): EmailClient {
    const [name, ...rest] = uri.split('://');
    const configString = rest.join('://');

    const createClient = clients[name];

    if (!createClient) {
      const message = ErrorMessages.UnsupportedClient.replace('[client]', name);
      throw new Error(message);
    }

    const client = createClient(configString);

    return client;
  }
}
