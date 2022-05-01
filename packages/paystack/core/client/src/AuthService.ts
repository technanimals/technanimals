import { HttpClient, defaultHttpClient, RequestMethod } from './HttpClient';

export class AuthService {
  public readonly endpoint = 'https://api.paystack.co';
  public constructor(
    private readonly secret: string,
    private readonly httpClient: HttpClient = defaultHttpClient
  ) {}

  /**
   *
   */
  public get headers() {
    const { secret } = this;

    return {
      Authorization: `Bearer ${secret}`,
      'Content-Type': 'application/json',
    };
  }

  /**
   *
   * @param path
   * @returns
   */
  public getURL(path: string) {
    const { endpoint } = this;

    return `${endpoint}/${path}`;
  }

  /**
   *
   * @param input
   * @returns
   */
  public async makeRequest<T, R>(input: AuthRequest<T>) {
    const { method, path, data } = input;
    const { headers } = this;
    const url = this.getURL(path);

    return this.httpClient.makeRequest<T, R>({
      url,
      headers,
      method,
      data,
    });
  }
}

interface AuthRequest<T> {
  path: string;
  method: RequestMethod;
  data?: T;
}
export interface AuthConfig {
  clientSecret: string;
  httpClient?: HttpClient;
}
