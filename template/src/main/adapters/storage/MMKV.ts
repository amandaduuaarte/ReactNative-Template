import {MMKVStorage} from '@/infra/storage/mmkvStorage';

export const StorageAdapter = () => {
  return new MMKVStorage();
};
