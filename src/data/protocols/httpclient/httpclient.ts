export interface IHttpRequest {
  url: string;
  method: THttpMethods;
  body?: any;
  headers?: any;
}

type THttpMethods = 'GET' | 'POST' | 'DELETE' | 'UPDATE';

export interface IHttpClient<T = any> {
  request: (params: IHttpRequest) => Promise<IHttpResponse<T>>;
}

export interface IHttpResponse<T = any> {
  status: number;
  body?: T;
}
