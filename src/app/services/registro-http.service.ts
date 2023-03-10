import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { RegistroModel } from '../modules/registro.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroHttpService {

  readonly API_URL:string = "http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/0501553408/2022/2";

  constructor (private httpClient:HttpClient) { }

getAll():Observable<RegistroModel[]> {
  const url = `${this.API_URL}`;
  return this.httpClient.get<RegistroModel[]>(url);
}
}



