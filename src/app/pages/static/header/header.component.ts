import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [MessageService]

})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

