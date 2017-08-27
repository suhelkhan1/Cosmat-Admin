import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http'
import { Observable } from 'rxjs/Rx'

import 'rxjs/Rx'

@Injectable()
export class BrandService {

  url: string = '/api/brand'

  constructor(
    private http: Http
  ) { }

  add(data): Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers})

    return this.http.post(this.url, JSON.stringify(data), options).map( (response: Response) =>{
      return <any>response.json()
    } )
  }
}
