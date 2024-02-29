import {Student} from '@/data/usecases/student';
import {StudentModel} from '@/domain/models';
import {IStudent} from '@/domain/usecases';

import {HttpClientAdapter} from '../../adapters';

const BASE_URL = '/student';

async function AddStudentFactory(
  params: StudentModel.Params,
): Promise<StudentModel.Response | undefined> {
  const student = new Student(HttpClientAdapter(), BASE_URL);
  const container = student.add(params);
  return container;
}

async function GetStudentFactory(
  params: StudentModel.GetStudent,
): Promise<StudentModel.Response | undefined> {
  const student = new Student(HttpClientAdapter(), BASE_URL);
  const container = student.get(params);
  return container;
}

async function RemoveStudentFactory(
  params: StudentModel.RemoveStudentParams,
): Promise<StudentModel.Response | undefined> {
  const student = new Student(HttpClientAdapter(), BASE_URL);
  const container = student.remove(params);
  return container;
}

export const StudentFactory: IStudent = {
  add: AddStudentFactory,
  get: GetStudentFactory,
  remove: RemoveStudentFactory,
};
