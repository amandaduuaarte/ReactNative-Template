import {GraduatedStudent} from '@/data/usecases/graduateStudent';
import {GraduatedStudentModel} from '@/domain/models';
import {IGraduatedStudent} from '@/domain/usecases';

import {HttpClientAdapter, StorageAdapter} from '@/adapters';

export const isGraduatedFactory: Omit<
  IGraduatedStudent['isGraduated'],
  'save' | 'get'
> = async (
  params: GraduatedStudentModel.Params,
): Promise<GraduatedStudentModel.Response | undefined> => {
  const graduatedStudent = new GraduatedStudent(
    HttpClientAdapter(),
    '/graduatedStudent',
    StorageAdapter<GraduatedStudentModel.Response>(),
  );
  const getStudent = graduatedStudent.isGraduated(params);
  return getStudent;
};

export const saveFactory: any = async (
  params: GraduatedStudentModel.Response,
  keyStorage: string,
): Promise<void> => {
  const graduatedStudent = new GraduatedStudent(
    HttpClientAdapter(),
    '/graduatedStudent',
    StorageAdapter<GraduatedStudentModel.Response>(),
  );
  graduatedStudent.save(params, keyStorage);
};
