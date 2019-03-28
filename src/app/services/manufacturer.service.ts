import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
const ADD_MANUFACTURER_URL = environment.addManufacturerURL;
const GET_MANUFACTURER_URL = environment.getManufacturersURL;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {
  constructor(private http: HttpClient) { }

  addManufacturer(name): Observable<any> {
    let request = {
      name: name
    }
    return this.http.post<any>(ADD_MANUFACTURER_URL,request);
  }

  getManufacturers(): Observable<any[]>{
    return this.http.get(GET_MANUFACTURER_URL).pipe(
      map(this.extractData));
  }
  
  private extractData(res: Response) {
  let res_arr = Array();
  console.log(typeof res_arr);
  for(var i = 0;i<Object.keys(res).length;i++) {

    res_arr.push(res[i]);
  }
  //console.log(res_arr);
  return res_arr;

  }
}
