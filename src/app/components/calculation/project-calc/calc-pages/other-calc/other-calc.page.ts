import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProject } from 'src/app/interfaces/project';
import { ProjectManagement } from 'src/app/services/project-management.service';




@Component({
    selector: 'app-other-calc',
    templateUrl: './other-calc.page.html',
    styleUrls: ['./other-calc.page.scss'],
  })
  export class OtherCalcPage implements OnInit, OnDestroy  {
    public currentProject: IProject = null;

    public constructor(public projectManagement: ProjectManagement) {}

    ngOnInit(): void {
      this.currentProject = this.projectManagement.currentProject;
    }
    ngOnDestroy(): void {

    }

  }
