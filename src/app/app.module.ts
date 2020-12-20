import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ProjectManagment } from './services/project-managment';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [
    ProjectManagment
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}