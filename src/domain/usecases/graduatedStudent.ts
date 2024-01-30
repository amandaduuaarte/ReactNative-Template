import {GraduatedStudentModel} from '../models';

export interface IGraduatedStudent {
  isGraduated: (
    params: GraduatedStudentModel.Params,
  ) => Promise<GraduatedStudentModel.Response | undefined>;

  // Salvar os estudantes que vão se graduar na semana (salvar no storage)
  save: (
    params: GraduatedStudentModel.Response,
    storageKey: string,
  ) => Promise<void>;

  get: (storageKey: string) => GraduatedStudentModel.Response;
}
