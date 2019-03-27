import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const GET_INVENTORY_URL = environment.viewInventoryURL;
const MARKASSOLD_URL = environment.markAsSoldURL;
@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }

  getInventory(): Observable<any[]>{
    return this.http.get(GET_INVENTORY_URL).pipe(
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

  markAsSold(model_id): Observable<any>{
    let request = {
      model_id: model_id
    }
    return this.http.post<any>(MARKASSOLD_URL,request);
  }
}
