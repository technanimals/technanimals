# React

## Installation

```bash
$ yarn install '@technanimals/email'
```

## Usage

```ts
import { EmailClientProvider } from '@technanimals/email';

const client = EmailClientProvider.fromClientURI('sendgrid://apiKey=SG.API_KEY_VALUE');

client.send({
  /**
   * The destination email address
   */
  to: 'destination@email.com',
  /**
   * Where the email is sent from
   */
  from: 'sender@email.com',
  /**
   * The html representation of the email being sent
   */
  html: '<button>click me</button>',
  /**
   * The subject that will be shown to the recipient of the email
   */
  subject: 'Hello from sendgrid',
});
```

## Support

Currently only [SendGrid Client](https://docs.sendgrid.com/for-developers) is supported.
