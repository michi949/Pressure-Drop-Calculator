import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExportPage } from './export.page';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FontAwesomeModule,
        CommonModule
    ],
    declarations: [
        ExportPage
    ],
    providers: [],
  })
  export class ExportModule { }
