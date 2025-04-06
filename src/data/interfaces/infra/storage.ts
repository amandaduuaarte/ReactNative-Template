

export interface IStorage {
  setItem: <T>(key: string, value: T, path?: string) => void;
  deleteItem: (key: string) => void;
  getItem: (key: string) => unknown ;
}
