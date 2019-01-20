import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dedication',
  templateUrl: './dedication.component.html',
  styleUrls: ['./dedication.component.css']
})
export class DedicationComponent implements OnInit {

  static dedicationPath: string = "dedication";

  constructor() { }

  ngOnInit() {
  }

}
