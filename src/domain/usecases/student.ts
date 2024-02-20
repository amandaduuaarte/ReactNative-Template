import {StudentModel} from '../models';

export interface IStudent {
  add: (
    params: StudentModel.Params,
  ) => Promise<StudentModel.Response | undefined>;

  get: (
    params: StudentModel.GetStudent,
  ) => Promise<StudentModel.Response | undefined>;

  remove: (
    params: StudentModel.RemoveStudentParams,
  ) => Promise<StudentModel.Response | undefined>;
}
