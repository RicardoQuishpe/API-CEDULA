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
    this.cedulareg;
    this.yearg;

    this.cols = [
      { field: 'codmat', header: 'Codmat' },
      { field: 'materia', header: 'Materia' },
      { field: 'paralelo', header: 'Quantity' },
      { field: 'horas', header: 'Name' },
      { field: 'aula', header: 'Category' },
      { field: 'ubicacion', header: 'Quantity' },
      { field: 'funcion', header: 'Name' },
      { field: 'est', header: 'Category' },
      { field: 'nroSesiones', header: 'Quantity' },
      { field: 'lunes', header: 'Name' },
      { field: 'martes', header: 'Category' },
      { field: 'miercoles', header: 'Quantity' },
      { field: 'jueves', header: 'Name' },
      { field: 'viernes', header: 'Category' },
      { field: 'sabado', header: 'Quantity' },
      { field: 'hSimul', header: 'Name' },
      { field: 'fechaI', header: 'Category' },
      { field: 'fechaF', header: 'Quantity' },
      { field: 'horarioF', header: 'Name' },
      { field: 'codcar', header: 'Category' },
      { field: 'carrera', header: 'Quantity' },
      { field: 'facultad', header: 'Quantity' },
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

  cedulareg(cedula: string) {
    this.registroHttpservices
      .getOne(cedula).subscribe((response: RegistroModel[]) => {
        this.registros = response;
      });
    console.log(this.registros);
  }


  yearg(year: string) {
    this.registroHttpservices
      .gettwo(year).subscribe((response: RegistroModel[]) => {
        this.registros = response;
      });
    console.log(this.registros);
  }

@Input() get selectedColumns(): any[] {
        return this._selectedColumns;
    }

    set selectedColumns(val: any[]) {
        //restore original order
        this._selectedColumns = this.cols.filter(col => val.includes(col));
    }

}
