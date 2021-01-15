import { Component, OnInit, OnDestroy } from '@angular/core';
import {ProjectManagement} from '../../../services/project-management.service';
import {IProject} from '../../../interfaces/project';
import { Modal } from '@material-ui/core';


enum ActiveCalcPage {
  Tube,
  Resist,
  Other
}

@Component({
    selector: 'app-project-calc',
    templateUrl: './project-calc.page.html',
    styleUrls: ['./project-calc.page.scss'],
  })
  export class ProjectCalcPage implements OnInit, OnDestroy  {
    public ActiveCalcPage = ActiveCalcPage;
    public currentProject: IProject = null;
    public activePage:ActiveCalcPage = ActiveCalcPage.Tube;

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

    public changeActivePage(activePage: ActiveCalcPage) {
        this.activePage = activePage;
    }


    public openAddModal() {
      
    }

  }
