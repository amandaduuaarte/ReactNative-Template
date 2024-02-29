import {GraduatedStudent} from '@/data/usecases/graduateStudent';
import {GraduatedStudentModel} from '@/domain/models';
import {IGraduatedStudent} from '@/domain/usecases';

import {HttpClientAdapter, StorageAdapter} from '../../adapters';

async function isGraduatedFactory(
  params: GraduatedStudentModel.Params,
): Promise<GraduatedStudentModel.Response | undefined> {
  const graduatedStudent = new GraduatedStudent(
    HttpClientAdapter(),
    '/graduatedStudent',
    StorageAdapter<GraduatedStudentModel.Response>(),
  );
  const getStudent = graduatedStudent.isGraduated(params);
  return getStudent;
}

async function saveFactory(
  params: GraduatedStudentModel.Response,
  keyStorage: string,
): Promise<void> {
  const graduatedStudent = new GraduatedStudent(
    HttpClientAdapter(),
    '/graduatedStudent',
    StorageAdapter<GraduatedStudentModel.Response>(),
  );
  graduatedStudent.save(params, keyStorage);
}

function getFactory(storageKey: string): GraduatedStudentModel.Response {
  const graduatedStudent = new GraduatedStudent(
    HttpClientAdapter(),
    '/graduatedStudent',
    StorageAdapter<GraduatedStudentModel.Response>(),
  );
  return graduatedStudent.get(storageKey);
}

export const GraduatedStudentFactory: IGraduatedStudent = {
  isGraduated: isGraduatedFactory,
  save: saveFactory,
  get: getFactory,
};
