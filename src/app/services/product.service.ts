import {Injectable} from '@angular/core';
import {Method, RestService} from './rest.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StorageService} from './storage.service';
import {Product} from '../models/product';

@Injectable()
export class ProductService extends RestService {

  constructor(protected http: HttpClient,
              private storageService: StorageService) {
    super(http);
  }

  query(userId = null): Observable<any[]> {
    return this.request({
      url: 'product/list' + (userId == null ? '' : '/' + userId)
    });
  }

  tags(): Observable<any[]> {
    return this.request({
      url: 'product/tags'
    });
  }

  add(data, productId = null): Observable<any[]> {
    data['userId'] = this.storageService.currentUserId();
    return this.request({
      url: productId == null ? 'product/add' : `product/edit/${productId}`,
      method: productId == null ? Method.POST : Method.PUT,
      data: data
    });
  }

  get(productId): Observable<any> {
    const userId = this.storageService.currentUserId();
    return this.request({
      url: 'product/get' + '/' + userId + '/' + productId
    });
  }

  delete(productId): Observable<any[]> {
    const userId = this.storageService.currentUserId();
    return this.request({
      url: `product/remove/${productId}/${userId}`,
      method: Method.DELETE
    });
  }
}
