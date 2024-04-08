export class LocalStorage {
  static getObj<T>(key: string): T | null {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : null;
  }

  static setObj<T>(key: string, val: T) {
    localStorage.setItem(key, JSON.stringify(val));
  }
}
