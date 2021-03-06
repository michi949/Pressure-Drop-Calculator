import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ProjectManagement } from './services/project-management.service';
import { CommonModule } from '@angular/common';
import {CalculationModule} from './components/calculation/calculation.module';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {ImportModule} from './components/import/import.module';
import {ExportModule } from './components/export/export.module';
import {SettingsModule} from './components/settings/settings.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ImportModule,
    ExportModule,
    CalculationModule,
    SettingsModule,
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [
    ProjectManagement
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
}) export class AppModule {

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }

}
