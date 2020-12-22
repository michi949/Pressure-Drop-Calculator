import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ProjectManagement } from './services/project-management.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Reder Systems Druckverlust';


  public constructor(private projectManagement: ProjectManagement) {
  }

  ngOnInit(): void {
    this.projectManagement.getProjectFromLocalStorage();
  }
}
