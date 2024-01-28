import {GraduatedStudentModel} from '../models';

export interface IGraduatedStudent {
  isGraduated: (
    params: GraduatedStudentModel.Params,
  ) => Promise<GraduatedStudentModel.Response>;
}
