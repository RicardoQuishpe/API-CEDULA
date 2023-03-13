import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlideMenuModule } from 'primeng/slidemenu';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    PanelModule,
    ToastModule,
    ButtonModule,
    MenuModule,
    SlideMenuModule
  ]
})
export class StaticModule { }
