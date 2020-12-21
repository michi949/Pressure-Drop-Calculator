import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImportPage } from './import.page';
import {CommonModule} from '@angular/common';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {DragDropDirective} from './drag-drop.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
  ],
    declarations: [
        ImportPage,
        DragDropDirective
    ],
    providers: [

    ],
  })
  export class ImportModule {

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
