import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SettingsPage } from './settings.page';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FontAwesomeModule,
    ],
    declarations: [
        SettingsPage
    ],
    providers: [

    ],
  })
  export class settingsModule { }