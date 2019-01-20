import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patrons',
  templateUrl: './patrons.component.html',
  styleUrls: ['./patrons.component.css']
})
export class PatronsComponent implements OnInit {

  static patronsPath: string = "patrons";

  constructor() { }

  ngOnInit() {
  }

}
