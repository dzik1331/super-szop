import {Injectable} from '@angular/core';
import {Method, RestService} from './rest.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class UserService extends RestService {

  constructor(protected http: HttpClient) {
    super(http);
  }

  login(data: { login: string, password: string }): Observable<any> {
    return this.request({
      url: 'user/login',
      data: data,
      method: Method.POST
    });
  }

  roles(): Observable<any> {
    return this.request({
      url: 'user/roles'
    });
  }

  addUser(data): Observable<any> {
    return this.request({
      url: 'user/add',
      data: data,
      method: Method.POST
    });
  }

  getAll(): Observable<any> {
    return this.request({
      url: 'user/all',
      method: Method.GET
    });
  }

}
