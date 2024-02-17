import {StudentModel} from '@/domain/models';
import {IStudent} from '@/domain/usecases';
import {IHttpClient} from '../protocols';

export class Student implements IStudent {
  constructor(
    private readonly HttpClient: IHttpClient<StudentModel.Response>,
    private readonly url: string,
  ) {}

  async add(params: StudentModel.Params) {
    try {
      const response = await this.HttpClient.request({
        method: 'POST',
        url: this.url,
        body: params,
      });

      return response.body;
    } catch (err: any) {
      console.error(err.message);
      return;
    }
  }

  async remove(params: StudentModel.RemoveStudentParams) {
    try {
      const response = await this.HttpClient.request({
        method: 'DELETE',
        url: this.url,
        body: params,
      });
      return response.body;
    } catch (err: any) {
      console.error(err.message);
      return;
    }
  }
}
