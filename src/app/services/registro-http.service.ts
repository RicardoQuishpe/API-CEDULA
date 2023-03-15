import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { RegistroModel } from '../modules/registro.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroHttpService {
  

  readonly API_URL:string =  'http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/0501553408/2022/2';
  readonly CURL:string =  'http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/${cedula}/2022/2';  
  readonly YURL:string =  'http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/0501553408/${year}/2';  
  readonly cy_URL:string =  'http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/${cedula}/${year}/2';             
  readonly Api_url1: string = 'http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/${cedula}/${year}/${id}';


  constructor (private httpClient:HttpClient) { }


getAll(){
  
  const url = `${this.API_URL}`;
  const response = this.httpClient.get<RegistroModel[]>(url)
  return response 
  
 }

 getOne(cedula:string):Observable<RegistroModel[]> {
  return this.httpClient.get<RegistroModel[]>(
  this.CURL.replace('${cedula}',cedula)
);
}

gettwo(year:string ):Observable<RegistroModel[]> {
  return this.httpClient.get<RegistroModel[]>(
  this.YURL.replace('${year}',year)
);
}

datos(cedula: string, year: string, id: string):Observable<RegistroModel[]>{
  return this.httpClient.get<RegistroModel[]>(
    this.Api_url1.replace('${cedula}',cedula).replace('${year}',year).replace('${id}',id)) 
}

}




/*

getyear(id:RegistroModel['year']):Observable<RegistroModel[]> {
  const url = `${this.API_URL}/${id}`; 
  return this.httpClient.get<RegistroModel[]>(url);
}
getid(id:RegistroModel['id']):Observable<RegistroModel[]> {
  const url = `${this.API_URL}/${id}`; 
  return this.httpClient.get<RegistroModel[]>(url);
}
getAll():Observable<RegistroModel[]> {
  const url = `${this.API_URL}`;
  return this.httpClient.get<RegistroModel[]>(url);
}
gettree(cedula:string, year:string ):Observable<RegistroModel[]> {
  return this.httpClient.get<RegistroModel[]>(
  this.cy_URL.replace('${cedula}',cedula)
);
}
regcy (cedula: string , year: string) {
  this.registroHttpservices
    .gettree(cedula, year).subscribe((response: RegistroModel[]) => {
      this.registros = response;
    });
  console.log(this.registros);
}
*/




