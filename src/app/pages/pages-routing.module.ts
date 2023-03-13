import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { RegistroComponent } from './registros/registros.component';

const routes:Routes = [
  //rutas hijas
  {path:'dashboard',
  component:PagesComponent,
children:[
  {path:'', component:DashboardComponent},
  {path:'registro', component:RegistroComponent},

]
},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule {}
