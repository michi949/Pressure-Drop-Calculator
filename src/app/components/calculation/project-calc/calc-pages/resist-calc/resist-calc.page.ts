import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProject } from 'src/app/interfaces/project';
import { ProjectManagement } from 'src/app/services/project-management.service';




@Component({
    selector: 'app-resist-calc',
    templateUrl: './resist-calc.page.html',
    styleUrls: ['./resist-calc.page.scss'],
  })
  export class ResistCalcPage implements OnInit, OnDestroy  {
    public currentProject: IProject = null;

    public constructor(public projectManagement: ProjectManagement) {}

    ngOnInit(): void {
      this.currentProject = this.projectManagement.currentProject;
    }
    ngOnDestroy(): void {

    }

  }
