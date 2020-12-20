import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExportPage } from './export.page';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FontAwesomeModule,
    ],
    declarations: [
        ExportPage
    ],
    providers: [

    ],
  })
  export class ExportPageModule { }