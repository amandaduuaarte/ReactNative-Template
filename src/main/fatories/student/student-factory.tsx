import {Student} from '../../../data/usecases/student';
import {StudentModel} from '../../../domain/models';
import {IStudent} from '../../../domain/usecases';
import {AxiosClient} from '../../../infra';

export const AddStudentFactory: Omit<IStudent['add'], 'remove'> = async (
  params: StudentModel.Params,
): Promise<StudentModel.Response | undefined> => {
  // TODO: ADAPTERS para o axios
  const axiosClient = new AxiosClient();
  const student = new Student(axiosClient, '/student');
  const container = student.add(params);
  return container;
};

export const RemoveStudentFactory: Omit<IStudent['remove'], 'add'> = async (
  params: StudentModel.RemoveStudentParams,
): Promise<StudentModel.Response | undefined> => {
  // TODO: ADAPTERS para o axios
  const axiosClient = new AxiosClient();
  const student = new Student(axiosClient, '/student');
  const container = student.remove(params);
  return container;
};
