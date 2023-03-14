import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api/public_api';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {

  items: MenuItem[] = [];
  
  ngOnInit() {
      this.items = [
          {label: 'Inicio'},
          {label: 'Informacion'},
          {label: 'Silabo'},
          {label: 'Registros'}
      ];
      
  }
}