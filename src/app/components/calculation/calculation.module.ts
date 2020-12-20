import { NgModule } from "@angular/core";
import { CalculationPage } from './calculation.page';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectCalcPage } from './project-calc/project-calc.page';
import { ProjectSetupPage } from './project-setup/project-setup.page';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FontAwesomeModule,
        CommonModule
    ],
    declarations: [
        CalculationPage,
        ProjectCalcPage,
        ProjectSetupPage
    ],
    providers: [

    ],
  })
  export class CalculationPageModule { }