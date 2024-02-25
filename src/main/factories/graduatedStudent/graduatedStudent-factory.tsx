import {GraduatedStudent} from '@/data/usecases/graduateStudent';
import {GraduatedStudentModel} from '@/domain/models';

import {HttpClientAdapter, StorageAdapter} from '../../adapters';

export const isGraduatedFactory = async (
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

export const saveFactory = (
  params: GraduatedStudentModel.Response,
  keyStorage: string,
): void => {
  const graduatedStudent = new GraduatedStudent(
    HttpClientAdapter(),
    '/graduatedStudent',
    StorageAdapter<GraduatedStudentModel.Response>(),
  );
  graduatedStudent.save(params, keyStorage);
};

export const getFactory = (keyStorage: string): any => {
  const graduatedStudent = new GraduatedStudent(
    HttpClientAdapter(),
    '/graduatedStudent',
    StorageAdapter<GraduatedStudentModel.Response>(),
  );
  return graduatedStudent.get(keyStorage);
};
