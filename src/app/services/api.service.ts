import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class ApiService {

  private url: string = '/api';

  public forms_prefix = 'forms';

  private options;


  constructor(private http: Http) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: headers });
  }


  private extractData(res: Response) {
    let data = res.json() || {};

    if (data.status === false) {
      throw new Error(data.content || data);
    }

    return data.content || data || {};
  }


  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg = '';
    let body: any;
    let bodyContentMessage = '';

    if (error instanceof Response) {
      body = error.json() || error;
      bodyContentMessage = body.content;
      errMsg = `${error.status} - ${error.statusText || ''} ${error.url}`;
    } else {
      bodyContentMessage = error.message ? error.message : error.toString();
    }

    console.warn(errMsg, ' - ', (bodyContentMessage || ''));

    return Observable.throw(bodyContentMessage || error);
  }


  /**
   * метод для преобразования URL
   *
   * @param {any} url
   * @returns {string}
   *
   * @memberOf ApiService
   */
  protected getUrl(url: string | string[]) {
    if (typeof url === 'object' && !!url.length) {
      url = url.filter(item => !!item).join('/');
    }

    if (url[0] === '/') {
      return this.url + url;
    }

    return this.url + '/' + url;
  }


  // ===========
  // API methods
  //


  get(_url: string | string[]) {
    return this.http.get(this.getUrl(_url), this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }


  post(_url: string | string[], data = {}) {
    return this.http.post(this.getUrl(_url), data, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }


  put(_url: string | string[], data = {}) {
    return this.http.put(this.getUrl(_url), data, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }


  delete(_url: string | string[]) {
    return this.http.delete(this.getUrl(_url), this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

}
