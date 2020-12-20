import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectManagment } from 'src/app/services/project-managment';

@Component({
    selector: "app-calculation",
    templateUrl: "./calculation.page.html",
    styleUrls: ["./calculation.page.scss"],
  })
  export class CalculationPage implements OnInit, OnDestroy  {

    public constructor(public projectManagment: ProjectManagment) {}

    ngOnInit(): void {}

    ngOnDestroy(): void {} 

  }