import sendGridMailService, { MailService } from '@sendgrid/mail';

import { EmailClient, SendEmail } from './EmailClient';

export class SendgridClient implements EmailClient {
  static fromConfigString(configString: string): SendgridClient {
    const config = EmailClient.parseConfigString(configString);

    sendGridMailService.setApiKey(config.apiKey);
    const client = new SendgridClient(sendGridMailService);

    return client;
  }

  public sendEmail: SendEmail;
  constructor(private readonly mailService: MailService) {
    this.sendEmail = this.mailService.send.bind(this.mailService);
  }
}

export interface SendGridConfig {
  apiKey: string;
}
