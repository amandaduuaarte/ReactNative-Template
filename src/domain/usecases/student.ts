import {CreateStudentModel, RemoveStudentModel} from '../models';

export interface ICreateStudent {
  add: (
    params: CreateStudentModel.Params,
  ) => Promise<CreateStudentModel.Response>;
}

export interface IRemoveStudent {
  remove: (
    params: RemoveStudentModel.Params,
  ) => Promise<RemoveStudentModel.Response>;
}
