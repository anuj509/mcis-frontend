import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
const ADD_MODEL_URL = environment.addModelURL;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private http: HttpClient) { }

  addModel(request): Observable<any> {
    var httpHeaders = {
    headers: new HttpHeaders({ 'enctype': 'multipart/form-data'})
    }
    return this.http.post<any>(ADD_MODEL_URL,request,httpHeaders);
  }
}
