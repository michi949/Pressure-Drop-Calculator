import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ProjectManagment } from './services/project-managment';
import { CommonModule } from '@angular/common';
import {CalculationPageModule} from './components/calculation/calculation.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [
    ProjectManagment
  ],
  bootstrap: [AppComponent]
}) export class AppModule {}
