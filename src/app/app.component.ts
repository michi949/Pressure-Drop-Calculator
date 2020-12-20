import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ProjectManagment } from './services/project-managment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Reder Systems Druckverlust';

  public constructor(private projectManagment: ProjectManagment) {}

  ngOnInit(): void {
    this.projectManagment.getProjectFromLocalStroage()


  }
}
