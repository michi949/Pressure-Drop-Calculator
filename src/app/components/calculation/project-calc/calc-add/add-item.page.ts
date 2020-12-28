import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IProject } from 'src/app/interfaces/project';
import { ProjectManagement } from 'src/app/services/project-management.service';




@Component({
    selector: 'app-add-item',
    templateUrl: './add-item.page.html',
    styleUrls: ['./add-item.page.scss'],
  })
  export class AddItemPage implements OnInit, OnDestroy  {
    public currentProject: IProject = null;

    public tube = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });

    public resist = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });

    public other = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });

    public constructor(public projectManagement: ProjectManagement) {}

    ngOnInit(): void {
      this.currentProject = this.projectManagement.currentProject;
    }

    ngOnDestroy(): void {

    }

  }
