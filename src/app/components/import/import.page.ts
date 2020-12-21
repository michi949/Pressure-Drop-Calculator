import { Component, OnInit, OnDestroy } from '@angular/core';
import {element} from 'protractor';
import {FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-import',
    templateUrl: './import.page.html',
    styleUrls: ['./import.page.scss'],
  })
  export class ImportPage implements OnInit  {
    public file: any = null;
    public constructor() {

    }

    ngOnInit(): void {

    }

  public uploadFile(event) {
       this.file = event[0];
  }

  public deleteAttachment() {
    this.file = null;
  }

  public loadDataFromFile() {
      console.log(this.file);
  }
}
