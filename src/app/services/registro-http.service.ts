import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { RegistroModel } from '../modules/registro.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroHttpService {

  readonly API_URL:string = "http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/0102007176/2020/1";
                                                                                          

  constructor (private httpClient:HttpClient) { }

getAll():Observable<RegistroModel[]> {
  const url = `${this.API_URL}`;
  return this.httpClient.get<RegistroModel[]>(url);
}
/*
getci(id:RegistroModel['ci']):Observable<RegistroModel[]> {
  const url = `${this.API_URL}/${id}`; 
  return this.httpClient.get<RegistroModel[]>(url);
}
getyear(id:RegistroModel['year']):Observable<RegistroModel[]> {
  const url = `${this.API_URL}/${id}`; 
  return this.httpClient.get<RegistroModel[]>(url);
}
getid(id:RegistroModel['id']):Observable<RegistroModel[]> {
  const url = `${this.API_URL}/${id}`; 
  return this.httpClient.get<RegistroModel[]>(url);
}
*/
}



