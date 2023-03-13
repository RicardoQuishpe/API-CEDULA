import { Component, OnInit } from '@angular/core';
import { RegistroModel, } from 'src/app/modules/registro.model';
import { RegistroHttpService } from 'src/app/services/registro-http.service';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistroComponent implements OnInit {
  registros: RegistroModel[] = [];
  statuses: any[] = [];
  loading: boolean = true;
  activityValues: number[] = [0, 100];


  constructor(private registroHttpservices: RegistroHttpService) {}

  getEventValue($event: any): string {
    return $event.target.value;
  }

  ngOnInit(): void {
    this.getRegistros();
    this.cedulareg;
    this.yearg;
  }

  getRegistros(){
  this.registroHttpservices.getAll().subscribe(
    response => {
      this.registros = response;
      console.log(response);
    }
  );
}

cedulareg (cedula: string) {
  this.registroHttpservices
    .getOne(cedula).subscribe((response: RegistroModel[]) => {
      this.registros = response;
    });
  console.log(this.registros);
}


yearg (year: string) {
  this.registroHttpservices
    .gettwo(year).subscribe((response: RegistroModel[]) => {
      this.registros = response;
    });
  console.log(this.registros);
}

}
