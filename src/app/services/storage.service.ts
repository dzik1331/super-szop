import {Injectable} from '@angular/core';

@Injectable()
export class StorageService {

  constructor() {
  }

  add(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string): any {
    const data = sessionStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  remove(key: string): void {
    sessionStorage.removeItem(key);
  }

  clear(): void {
    sessionStorage.clear();
  }

  contains(key: string): boolean {
    return !!sessionStorage.getItem(key);
  }
}
