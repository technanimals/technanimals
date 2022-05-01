import { EmailClient } from 'clients/EmailClient';

describe('EmailClient', () => {
  describe('.parseConfigString()', () => {
    it('Should return empty object', () => {
      const config = EmailClient.parseConfigString('');

      expect(config).toEqual({});
    });

    it('Should have apiKey in the config', () => {
      const config = EmailClient.parseConfigString('apiKey=API_KEY_VALUE');

      expect(config).toHaveProperty('apiKey');
      expect(config.apiKey).toBe('API_KEY_VALUE');
    });
  });
});
