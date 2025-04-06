import {TGraduatedStudent} from '@/data/types/useCases/graduatedStudentTypes';

export interface IGraduatedStudent {
  isGraduated: (
    params: TGraduatedStudent.Params,
  ) => Promise<TGraduatedStudent.Response | undefined>;

  save: (
    params: TGraduatedStudent.Response,
    storageKey: string,
  ) => Promise<void>;

  get: (storageKey: string) => TGraduatedStudent.Response;
}
