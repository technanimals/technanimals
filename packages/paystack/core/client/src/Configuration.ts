import { AuthService } from './AuthService';
import { RequestMethod } from './HttpClient';

const RESOURCE_MATCHER = /:(\w+)/g;

export class ConfiguredClient<K extends string> {
  constructor(
    private readonly root: string,
    private readonly configuration: Configuration<K>,
    private readonly authService: AuthService
  ) {
    this.validateConfiguration();
  }

  public getClient<Client extends Record<K, any>>(): Client {
    const entries = Object.entries<ConfigurationResource>(this.configuration);

    const client = entries.reduce((memo, [key, value]) => {
      const { method, route } = value;
      const handler = this.getMethodHandler(method, route);

      return {
        ...memo,
        [key]: handler,
      };
    }, {}) as unknown as Client;

    return client;
  }

  private getPath<T extends Params>(resource: string, data?: T): string {
    const matches = resource.match(RESOURCE_MATCHER);
    const { root } = this;
    if (!matches) {
      return `${root}/${resource}`;
    }

    if (!data) {
      throw new Error('Method cannot me executed without data');
    }

    const path = matches.reduce((memo, match) => {
      const [, k] = match.split(':');
      const key = k as keyof T;
      const value = data[key];

      return memo.replace(match, value.toString());
    }, resource);

    return `${root}/${path}`;
  }

  /**
   *
   * @param method
   * @param resource
   * @returns
   */
  private getMethodHandler<T extends Params, R>(method: RequestMethod, resource: string) {
    return async (data?: T) => {
      const path = this.getPath(resource, data);
      return this.authService.makeRequest<T, R>({
        method,
        path,
        data,
      });
    };
  }

  /**
   *
   */
  private validateConfiguration() {
    const resources = Object.entries<ConfigurationResource>(this.configuration);
    const errors: string[] = [];
    const methods: RequestMethod[] = Object.values(RequestMethod);

    resources.forEach(([key, resource]) => {
      const { method } = resource;
      const isValidMethod = methods.includes(method);
      if (!isValidMethod) {
        errors.push(`${key}: has invalid method ${method}`);
      }
    });
  }
}

export interface ConfigurationResource {
  method: RequestMethod;
  route: string;
}

export type Params = Record<string, string | number>;

export type Configuration<T extends string> = Record<T, ConfigurationResource>;
export interface PaystackResponse<T> {
  status: boolean;
  message: string;
  data: T;
}
export type ClientMethod<T, R> = (data: T) => Promise<PaystackResponse<R>>;
