import { IStudent } from '@/data/interfaces/useCases/student';
import { TStudent } from '@/data/types/useCases/studentTypes';
import { Student } from '@/domain/usecases/student';
import { HttpClientAdapter } from '@/main/adapters/httpClient/axios';

const BASE_URL = '/student';

async function AddStudentFactory(
  params: TStudent.Params,
): Promise<TStudent.Response | undefined> {
  const student = new Student(HttpClientAdapter(), BASE_URL);
  const container = student.add(params);
  return container;
}

async function GetStudentFactory(
  params: TStudent.GetStudent,
): Promise<TStudent.Response | undefined> {
  const student = new Student(HttpClientAdapter(), BASE_URL);
  const container = student.get(params);
  return container;
}

async function RemoveStudentFactory(
  params: TStudent.RemoveStudentParams,
): Promise<TStudent.Response | undefined> {
  const student = new Student(HttpClientAdapter(), BASE_URL);
  const container = student.remove(params);
  return container;
}

export const StudentFactory: IStudent = {
  add: AddStudentFactory,
  get: GetStudentFactory,
  remove: RemoveStudentFactory,
};
