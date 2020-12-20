import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IProject} from '../../../interfaces/project';
import {ProjectManagement} from '../../../services/project-management.service';

@Component({
    selector: 'app-project-setup',
    templateUrl: './project-setup.page.html',
    styleUrls: ['./project-setup.page.scss'],
  })

// tslint:disable-next-line:component-class-suffix
  export class ProjectSetupPage implements OnInit, OnDestroy  {
    public projectGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      id: new FormControl('', [Validators.required]),
      editor: new FormControl('', [Validators.required]),
      description: new FormControl(''),
    });

    public constructor(private projectManagement: ProjectManagement) {

    }

    ngOnInit(): void {

    }
    ngOnDestroy(): void {

    }

    public submitNewProject() {
      if (this.projectGroup.valid) {
        const project: IProject = {name: this.projectGroup.get('name').value,
          editor: this.projectGroup.get('editor').value,
          id: this.projectGroup.get('id').value,
          description: this.projectGroup.get('description').value,
          resists: [], tubes: [],
          variousParts: []};

        this.projectManagement.currentProject = project;
      } else {

      }

    }

  }
