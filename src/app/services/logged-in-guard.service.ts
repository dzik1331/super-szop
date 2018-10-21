import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {StorageService} from './storage.service';

@Injectable()
export class LoggedInGuardService implements CanActivate {

  constructor(private storageService: StorageService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.storageService.get('currentUser') != null;
  }
}
