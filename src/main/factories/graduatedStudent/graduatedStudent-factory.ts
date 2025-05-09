import { IGraduatedStudent } from '@/data/interfaces/useCases/graduatedStudent';
import { TGraduatedStudent } from '@/data/types/useCases/graduatedStudentTypes';
import { GraduatedStudent } from '@/domain/usecases/graduateStudent';
import { HttpClientAdapter } from '@/main/adapters/httpClient/axios';
import { StorageAdapter } from '@/main/adapters/storage/MMKV';

async function isGraduatedFactory(
  params: TGraduatedStudent.Params,
): Promise<TGraduatedStudent.Response | undefined> {
  const graduatedStudent = new GraduatedStudent(
    HttpClientAdapter(),
    '/graduatedStudent',
    StorageAdapter(),
  );
  const getStudent = graduatedStudent.isGraduated(params);
  return getStudent;
}

async function saveFactory(
  params: TGraduatedStudent.Response,
  keyStorage: string,
): Promise<void> {
  const graduatedStudent = new GraduatedStudent(
    HttpClientAdapter(),
    '/graduatedStudent',
    StorageAdapter(),
  );
  graduatedStudent.save(params, keyStorage);
}

function getFactory(storageKey: string): TGraduatedStudent.Response {
  const graduatedStudent = new GraduatedStudent(
    HttpClientAdapter(),
    '/graduatedStudent',
    StorageAdapter(),
  );
  return graduatedStudent.get(storageKey);
}

export const GraduatedStudentFactory: IGraduatedStudent = {
  isGraduated: isGraduatedFactory,
  save: saveFactory,
  get: getFactory,
};
