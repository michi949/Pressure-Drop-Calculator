import { Injectable } from '@angular/core';
import { IProject } from '../interfaces/project';

@Injectable()
export class ProjectManagment {
    public currentProject: IProject = null;

    constructor() {

    }

    public saveProjectToLocalStorage() {
        localStorage.setItem('project', JSON.stringify(this.currentProject));
    }

    public getProjectFromLocalStroage() {
        var stringObject = localStorage.getItem('testObject');
        this.currentProject = JSON.parse(stringObject); 
    }
}