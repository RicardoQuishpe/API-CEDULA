import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './pages/registros/registros.component';
import { PagesRoutingModule } from './pages/pages-routing.module';


const routes:Routes = [
  { path: 'registro', component: RegistroComponent }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
    RouterModule.forRoot(routes), 
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }