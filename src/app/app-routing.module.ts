import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './pages/registros/registros.component';


const routes:Routes = [
  { path: 'registro', component: RegistroComponent }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes), 
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }