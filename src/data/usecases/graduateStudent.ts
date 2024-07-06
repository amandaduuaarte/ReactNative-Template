import {GraduatedStudentModel} from '@/domain/models';
import {IGraduatedStudent} from '@/domain/usecases';

import {IHttpClient} from '../interfaces';
import {IStorage} from '../interfaces/storage/storage';

export class GraduatedStudent implements IGraduatedStudent {
  constructor(
    public readonly HttpClient: IHttpClient<GraduatedStudentModel.Response>,
    private readonly url: string,
    private readonly Storage: IStorage<GraduatedStudentModel.Response>,
  ) {}

  async isGraduated(params: GraduatedStudentModel.Params) {
    if (!params.id || !params.email) {
      return;
    }

    try {
      const response = await this.HttpClient.request({
        method: 'GET',
        url: this.url,
        body: params,
      });

      if (response.body) {
        await this.save(response.body, 'student');
      }
      return response.body;
    } catch (err: any) {
      console.error(err?.message);
      return;
    }
  }

  async save(params: GraduatedStudentModel.Response, storageKey: string) {
    await this.Storage.setItem(storageKey, params);
  }

  get(storageKey: string) {
    const content = this.Storage.getItem(storageKey);
    return content;
  }
}
