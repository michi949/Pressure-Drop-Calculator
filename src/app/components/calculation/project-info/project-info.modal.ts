import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProjectManagement} from '../../../services/project-management.service';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.modal.html',
  styleUrls: ['./project-info.modal.scss'],
})
export class ProjectInfoModal implements OnInit, OnDestroy  {

  public constructor(public projectManagement: ProjectManagement) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

}
