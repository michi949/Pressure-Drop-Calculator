import { NgModule } from '@angular/core';
import { CalculationPage } from './calculation.page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectCalcPage } from './project-calc/project-calc.page';
import { ProjectSetupPage } from './project-setup/project-setup.page';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from '../../app.routes';
import {ProjectInfoModal} from './project-info/project-info.modal';
import { ResistCalcPage } from './project-calc/calc-pages/resist-calc/resist-calc.page';
import { OtherCalcPage } from './project-calc/calc-pages/other-calc/other-calc.page';
import { TubeCalcPage } from './project-calc/calc-pages/tube-calc/tube-calc.page';
import { AddItemPage } from './project-calc/calc-add/add-item.page';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    declarations: [
        CalculationPage,
        ProjectCalcPage,
        ProjectSetupPage,
        ProjectInfoModal,
        TubeCalcPage,
        ResistCalcPage,
        OtherCalcPage,
        AddItemPage
    ],
    providers: [

    ],
  })
  export class CalculationModule { }
