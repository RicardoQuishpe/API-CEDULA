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
        AppRoutingModule,
        HttpClientModule,
        ButtonModule,
        TableModule,
        StaticModule
    ]
})
export class AppModule { }
