import { Injectable } from '@angular/core';
import { IProject } from '../interfaces/project';

@Injectable()
export class ProjectManagement {
    public currentProject: IProject = null;

    constructor() {

    }

    public saveProjectToLocalStorage() {
        localStorage.setItem('project', JSON.stringify(this.currentProject));
    }

    public getProjectFromLocalStorage() {
        const stringObject = localStorage.getItem('project');
        this.currentProject = JSON.parse(stringObject);
    }
}
