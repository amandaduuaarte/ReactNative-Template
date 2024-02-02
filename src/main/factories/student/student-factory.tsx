import {Student} from '../../../data/usecases/student';
import {StudentModel} from '../../../domain/models';
import {IStudent} from '../../../domain/usecases';

import {HttpClientAdapter} from '../../adapters';

const BASE_URL = '/student';

export const AddStudentFactory: Omit<IStudent['add'], 'remove'> = async (
  params: StudentModel.Params,
): Promise<StudentModel.Response | undefined> => {
  const student = new Student(HttpClientAdapter(), BASE_URL);
  const container = student.add(params);
  return container;
};

export const RemoveStudentFactory: Omit<IStudent['remove'], 'add'> = async (
  params: StudentModel.RemoveStudentParams,
): Promise<StudentModel.Response | undefined> => {
  const student = new Student(HttpClientAdapter(), BASE_URL);
  const container = student.remove(params);
  return container;
};
