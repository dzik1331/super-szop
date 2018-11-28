import {Injectable} from '@angular/core';
import {StorageService} from './storage.service';

@Injectable()
export class RoleService {

  isAdmin: boolean = false;
  isUser: boolean = false;
  isSeller: boolean = false;

  constructor(private storageService: StorageService) {
  }

  setRole(role) {
    this.isAdmin = role == 1;
    this.isUser = role == 2;
    this.isSeller = role == 3;
  }

  noRoleSet() {
    return !this.isAdmin && !this.isUser && !this.isSeller;
  }
}
