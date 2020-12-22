import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectManagement } from 'src/app/services/project-management.service';

@Component({
    selector: 'app-calculation',
    templateUrl: './calculation.page.html',
    styleUrls: ['./calculation.page.scss'],
  })
  export class CalculationPage implements OnInit, OnDestroy  {

    public constructor(public projectManagement: ProjectManagement) {}

    ngOnInit(): void {}

    ngOnDestroy(): void {}

  }
