import {Injectable} from '@angular/core';
import {Method, RestService} from './rest.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ProductService extends RestService {

  constructor(protected http: HttpClient) {
    super(http);
  }

  query(): Observable<any[]> {
    return this.request({
      url: 'product/list'
    });
  }

  tags(): Observable<any[]> {
    return this.request({
      url: 'product/tags'
    });
  }

  add(data): Observable<any[]> {
    return this.request({
      url: 'product/add',
      method: Method.POST,
      data: data
    });
  }
}
