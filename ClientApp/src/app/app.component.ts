import { Component, OnInit } from '@angular/core';
import { Global } from './resources/Global'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private global: Global) {
    document.querySelector("title").innerHTML = global.title;
  }

  ngOnInit() {
  }
}
