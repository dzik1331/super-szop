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

  editUser(data, id): Observable<any> {
    data['id'] = id;
    return this.request({
      url: 'user/edit',
      data: data,
      method: Method.PUT
    });
  }

  getAll(): Observable<any> {
    return this.request({
      url: 'user/all',
      method: Method.GET
    });
  }

  deleteUser(id): Observable<any> {
    return this.request({
      url: `user/delete/${id}`,
      method: Method.DELETE
    });
  }

  getUser(id): Observable<any> {
    return this.request({
      url: `user/get-user/${id}`,
    });
  }

}
