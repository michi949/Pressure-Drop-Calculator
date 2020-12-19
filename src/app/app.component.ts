import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { PAGES } from "./app.pages";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Reder Systems Druckverlust';
  pages = PAGES;

  public constructor() {

  }

  ngOnInit(): void {
    
  }
}
