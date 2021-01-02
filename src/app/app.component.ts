import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ProjectManagement } from './services/project-management.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Reder Systems Druckverlust';


  public constructor(private projectManagement: ProjectManagement,
                     public router: Router) {
  }

  ngOnInit(): void {
    this.projectManagement.getProjectFromLocalStorage();
  }
}
