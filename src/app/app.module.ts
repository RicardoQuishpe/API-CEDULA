import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { RegistroComponent } from './pages/registros/registros.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { StaticModule } from "./pages/static/static.module";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginatorModule } from "primeng/paginator";
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
    declarations: [
        AppComponent,
        PagesComponent,
        RegistroComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        ButtonModule,
        TableModule,
        FormsModule,
        PaginatorModule,
        StaticModule,
        InputTextModule,
        
    ],
    
})
export class AppModule { }
