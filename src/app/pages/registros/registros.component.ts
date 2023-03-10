import { Component, OnInit } from '@angular/core';
import { RegistroModel, } from 'src/app/modules/registro.model';
import { RegistroHttpService } from 'src/app/services/registro-http.service';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistroComponent implements OnInit {
  registros: RegistroModel [] = [];
  constructor (private registroHttpservices:RegistroHttpService) { 
this.initRegistro();
  }
initRegistro(){
}
  ngOnInit(): void {
    this.getRegistros();
  }
  getRegistros(){
    this.registroHttpservices.getAll().subscribe(
      response => {
this.registros=response;
        console.log(response);

    }
  );
}

}
