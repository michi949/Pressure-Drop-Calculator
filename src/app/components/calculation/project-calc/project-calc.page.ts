import { Component, OnInit, OnDestroy } from '@angular/core';
import {ProjectManagement} from '../../../services/project-management.service';
import {IProject} from '../../../interfaces/project';

@Component({
    selector: 'app-project-calc',
    templateUrl: './project-calc.page.html',
    styleUrls: ['./project-calc.page.scss'],
  })
  export class ProjectCalcPage implements OnInit, OnDestroy  {
    public currentProject: IProject = null;

    public constructor(public projectManagement: ProjectManagement) {}

    ngOnInit(): void {
      this.currentProject = this.projectManagement.currentProject;
    }
    ngOnDestroy(): void {

    }

    public newProject() {
      this.projectManagement.currentProject = null;
      this.projectManagement.saveProjectToLocalStorage();
    }

  }
