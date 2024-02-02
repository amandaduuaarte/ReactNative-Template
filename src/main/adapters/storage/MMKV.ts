import {MMKVStorage} from '../../../infra/storage/mmkvStorage';

export const StorageAdapter = <T>() => {
  return new MMKVStorage<T>();
};
