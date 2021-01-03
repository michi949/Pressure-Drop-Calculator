import { Component, OnInit, OnDestroy } from '@angular/core';
import {ProjectManagement} from '../../services/project-management.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-export',
    templateUrl: './export.page.html',
    styleUrls: ['./export.page.scss'],
  })
  export class ExportPage implements OnInit, OnDestroy  {
    public pdfName = new FormControl('', [Validators.required]);
    public excelName = new FormControl('', [Validators.required]);

    public constructor(public projectManagement: ProjectManagement) {}

    ngOnInit(): void {
      if (this.projectManagement.currentProject !== null) {
        const name = this.projectManagement.currentProject.name;
        this.pdfName.setValue(name);
        this.excelName.setValue(name);
      }
    }
    ngOnDestroy(): void {

    }

    public exportPDF() {
      console.log(this.pdfName.value);
    }

    public exportExcel() {
      console.log(this.excelName.value);
    }
  }
