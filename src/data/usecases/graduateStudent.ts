import {GraduatedStudentModel} from '@/domain/models';
import {IGraduatedStudent} from '@/domain/usecases';

import {IHttpClient} from '../protocols';
import {IStorage} from '../protocols/storage/storage';

export class GraduatedStudent implements IGraduatedStudent {
  constructor(
    private readonly HttpClient: IHttpClient<GraduatedStudentModel.Response>,
    private readonly url: string,
    private readonly Storage: IStorage<GraduatedStudentModel.Response>,
  ) {}

  async isGraduated(params: GraduatedStudentModel.Params) {
    try {
      const response = await this.HttpClient.request({
        method: 'GET',
        url: this.url,
        body: params,
      });

      if (response.body) {
        this.save(response.body, 'student');
      }
      return response.body;
    } catch (err: any) {
      console.error(err.message);
      return;
    }
  }

  async save(params: GraduatedStudentModel.Response, storageKey: string) {
    // MMKV implementation
    this.Storage.setItem(storageKey, params);
  }

  get(storageKey: string) {
    // MMKV implementation
    const content = this.Storage.getItem(storageKey);
    return content;
  }
}
