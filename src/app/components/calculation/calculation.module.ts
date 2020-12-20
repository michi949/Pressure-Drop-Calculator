import { NgModule } from "@angular/core";
import { CalculationPage } from './calculation.page';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FontAwesomeModule,
    ],
    declarations: [
        CalculationPage
    ],
    providers: [

    ],
  })
  export class CalculationPageModule { }