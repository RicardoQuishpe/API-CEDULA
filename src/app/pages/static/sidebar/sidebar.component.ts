import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  gfg: MenuItem[] = [];

   ngOnInit() {
    this.gfg = [
      {
        label: 'Opcion 1',
        items: [
          {
            label: 'A'
          },
          {
            label: 'B'
          }
        ]
      },
      {
        label: 'Opcion2',
  
        items: [
          {
            label: 'A'
          },
          {
            label: 'B'
          }
        ]
      }
    ];
  }
}