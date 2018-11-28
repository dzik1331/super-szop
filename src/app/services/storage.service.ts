import {Injectable} from '@angular/core';
import {User} from '../models/user';

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

  currentUserId() {
    let data: any = sessionStorage.getItem('currentUser');
    data = data ? JSON.parse(data) : null;
    return data ? data.id : null;
  }
}
