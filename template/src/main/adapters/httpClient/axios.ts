import {AxiosClient} from '@/infra/httpclient/axios';

export const HttpClientAdapter = (): AxiosClient => {
  return new AxiosClient();
};
