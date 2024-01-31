import {GraduatedStudent} from '../../../data/usecases/graduateStudent';
import {GraduatedStudentModel} from '../../../domain/models';
import {IGraduatedStudent} from '../../../domain/usecases';
import {AxiosClient} from '../../../infra';
import {MMKVStorage} from '../../../infra/storage/mmkvStorage';

export const isGraduatedFactory: Omit<
  IGraduatedStudent['isGraduated'],
  'save' | 'get'
> = async (
  params: GraduatedStudentModel.Params,
): Promise<GraduatedStudentModel.Response | undefined> => {
  const axiosClient = new AxiosClient();
  const storage = new MMKVStorage<GraduatedStudentModel.Response>();
  const graduatedStudent = new GraduatedStudent(
    axiosClient,
    '/graduatedStudent',
    storage,
  );
  const getStudent = graduatedStudent.isGraduated(params);
  return getStudent;
};

export const saveFactory: any = async (
  params: GraduatedStudentModel.Response,
  keyStorage: string,
): Promise<void> => {
  const axiosClient = new AxiosClient();
  const storage = new MMKVStorage<GraduatedStudentModel.Response>();
  const graduatedStudent = new GraduatedStudent(
    axiosClient,
    '/graduatedStudent',
    storage,
  );
  graduatedStudent.save(params, keyStorage);
};
