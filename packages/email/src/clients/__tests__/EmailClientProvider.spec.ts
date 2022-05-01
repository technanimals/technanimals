import { EmailClientProvider } from 'clients/EmailClientProvider';
import { SendgridClient } from 'clients/SendgridClient';

describe('EmailClientProvider', () => {
  describe('.fromClientURI()', () => {
    it('Should throw error when client is not supported', () => {
      const createClient = () => EmailClientProvider.fromClientURI('');

      expect(createClient).toThrowError('client is not supported');
    });

    it('Should return a sendgrid email client', () => {
      const client = EmailClientProvider.fromClientURI('sendgrid://apiKey=SG.API_KEY_VALUE');

      expect(client).toBeInstanceOf(SendgridClient);
    });
  });
});
