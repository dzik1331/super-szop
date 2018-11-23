import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {StorageService} from './storage.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private storageService: StorageService) {
  }

  intercept(request: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
    const user = this.storageService.get('currentUser');

    const headers = new HttpHeaders({'user-session': user ? user.userSession : ''});
    const clone = request.clone({headers});
    return handler.handle(clone);
  }
}
