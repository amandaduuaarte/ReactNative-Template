import {MMKV, Mode} from 'react-native-mmkv';

import {IStorage} from '@/data/interfaces/infra/storage';

export class MMKVStorage implements IStorage {
  private static instance: MMKVStorage;
  private mmkv: MMKV;

  constructor() {
    this.mmkv = new MMKV({
      id: 'global-storage',
      path: 'react-native-template/storage',
      encryptionKey: 'hunter2',
      mode: Mode.MULTI_PROCESS,
    });
  }

  public static getInstance(): MMKVStorage {
    if (!MMKVStorage.instance) {
      MMKVStorage.instance = new MMKVStorage();
    }

    return MMKVStorage.instance;
  }

  setItem<T>(key: string, value: T): void {
    this.mmkv.set(key, JSON.stringify(value));
  }

  deleteItem(key: string): void {
    this.mmkv.delete(key);
  }

  getItem(key: string) {
    const content = this.mmkv.getString(key) || '';
    return JSON.parse(content);
  }
}
