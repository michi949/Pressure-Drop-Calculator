import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ImportPage } from './import.page';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FontAwesomeModule,
    ],
    declarations: [
        ImportPage
    ],
    providers: [

    ],
  })
  export class ImportaModule { }