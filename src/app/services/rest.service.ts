import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

export enum Method {
  GET, POST, PUT, DELETE
}

export interface Resource {

  url: string;
  method?: Method;
  params?: object;
  data?: object;
  form?: object;
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
  encode?: boolean;
  headers?: object;
  noPrefix?: boolean;

}

export abstract class RestService {
  constructor(protected http: HttpClient) {
  }

  private _get<T>(resource: Resource): Observable<T> {
    return this.http.get<T>(this.url(resource.url, resource.noPrefix));
  }

  private _post<T>(resource: Resource): Observable<T> {
    return this.http.post<T>(this.url(resource.url, resource.noPrefix), this.data(resource));
  }

  private _put<T>(resource: Resource): Observable<T> {
    return this.http.put<T>(this.url(resource.url, resource.noPrefix), this.data(resource));
  }

  private _delete<T>(resource: Resource): Observable<T> {
    return this.http.delete<T>(this.url(resource.url, resource.noPrefix));
  }

  private url(location: string, noPrefix: boolean): string {
    console.debug(`${noPrefix ? 'http://' + environment.serverApiUrl + location : 'http://' + environment.serverApiUrl + 'api/' + location}`)
    return noPrefix ? 'http://' + environment.serverApiUrl + location : 'http://' + environment.serverApiUrl + 'api/' + location;
  }

  private encode(data: any): string {
    const params = new URLSearchParams();

    if (data) {
      Object.keys(data)
        .forEach((key) => params.set(key, data[key]));
    }
    return params.toString();
  }

  private form(data: object): FormData {
    const form = new FormData();

    if (data) {
      Object.keys(data)
        .forEach((key) => form.append(key, data[key]));
    }

    return form;
  }

  private data(resource: Resource): any {
    if (resource.form) {
      return this.form(resource.form);
    }
    return resource.encode ? this.encode(resource.data) : resource.data;
  }


  protected request<T>(resource: Resource): Observable<T> {
    console.debug(resource)
    switch (resource.method || Method.GET) {
      case Method.POST:
        return this._post(resource);
      case Method.PUT:
        return this._put(resource);
      case Method.DELETE:
        return this._delete(resource);
      default:
        return this._get(resource);
    }
  }

}
