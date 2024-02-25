import {GraduatedStudentModel} from '../models';

export interface IGraduatedStudent {
  isGraduated: (
    params: GraduatedStudentModel.Params,
  ) => Promise<GraduatedStudentModel.Response | undefined>;

  save: (
    params: GraduatedStudentModel.Response,
    storageKey: string,
  ) => Promise<void>;

  get: (storageKey: string) => GraduatedStudentModel.Response;
}
