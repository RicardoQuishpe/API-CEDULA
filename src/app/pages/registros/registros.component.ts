import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RegistroModel, } from 'src/app/modules/registro.model';
import { RegistroHttpService } from 'src/app/services/registro-http.service';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css'],

})
export class RegistroComponent implements OnInit {
  registros: RegistroModel[] = [];
  statuses: any[] = [];
  activityValues: number[] = [0, 100];
  cols: any[] = [];
  _selectedColumns: any[] = [];
  

  constructor(private registroHttpservices: RegistroHttpService) { }

  getEventValue($event: any): string {
    return $event.target.value;
  }

  ngOnInit(): void {
    this.getRegistros();
    // this.cedulareg;
    // this.yearg;


    
    this.cols = [
      { field: 'codmat', header: 'Codmat' },
      { field: 'materia', header: 'Materia' },
      // { field: 'paralelo', header: 'Paralelo' },
      // { field: 'horas', header: 'Horas' },
      // { field: 'aula', header: 'Aula' },
      // { field: 'ubicacion', header: 'Ubicacion' },
      // { field: 'funcion', header: 'Funcion' },
      // { field: 'est', header: 'EST' },
      // { field: 'nroSesiones', header: 'Numero Sesiones' },
      // { field: 'lunes', header: 'Lunes' },
      // { field: 'martes', header: 'Martes' },
      // { field: 'miercoles', header: 'Miercoles' },
      // { field: 'jueves', header: 'Jueves' },
      // { field: 'viernes', header: 'Viernes' },
      // { field: 'sabado', header: 'Sabado' },
      // { field: 'hSimul', header: 'HSimul' },
      // { field: 'fechaI', header: 'Fecha Inicio' },
      // { field: 'fechaF', header: 'Fecha Final' },
      // { field: 'horarioF', header: 'Horario Final' },
      // { field: 'codcar', header: 'Codcar' },
      // { field: 'carrera', header: 'Carrera' },
      // { field: 'facultad', header: 'Facultad' },
  ];

  this._selectedColumns = this.cols;

  }
  

  getRegistros() {
    this.registroHttpservices.getAll().subscribe(
      response => {
        this.registros = response;
        console.log(response);
      }
    );
  }

  // cedulareg(cedula: string) {
  //   this.registroHttpservices
  //     .getOne(cedula).subscribe((response: RegistroModel[]) => {
  //       this.registros = response;
  //     });
  //   console.log(this.registros);
  // }


  // yearg(year: string) {
  //   this.registroHttpservices
  //     .gettwo(year).subscribe((response: RegistroModel[]) => {
  //       this.registros = response;
  //     });
  //   console.log(this.registros);
  // }

  
  Datos(cedula: string, year: string, id:string) {
    this.registroHttpservices
    .datos(cedula, year, id).subscribe((response: RegistroModel[]) => {
         this.registros= response;
        });
         console.log(this.registros)
   }


@Input() get selectedColumns(): any[] {
        return this._selectedColumns;
    }

    set selectedColumns(val: any[]) {
        //restore original order
        this._selectedColumns = this.cols.filter(col => val.includes(col));
    }

}
