import { Component, OnInit, OnDestroy } from '@angular/core';
import {ProjectManagement} from '../../services/project-management.service';

@Component({
    selector: 'app-export',
    templateUrl: './export.page.html',
    styleUrls: ['./export.page.scss'],
  })
  export class ExportPage implements OnInit, OnDestroy  {

    public constructor(public projectManagement: ProjectManagement) {

    }

    ngOnInit(): void {

    }
    ngOnDestroy(): void {

    }

  }
