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

    public getProjectFromLocalStroage() {
        const stringObject = localStorage.getItem('testObject');
        this.currentProject = JSON.parse(stringObject);
    }
}
