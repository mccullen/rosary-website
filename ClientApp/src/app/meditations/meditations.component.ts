import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-meditations',
  templateUrl: './meditations.component.html',
  styleUrls: ['./meditations.component.css']
})
export class MeditationsComponent implements OnInit {

  static meditationsPath: string = "meditations";

  constructor(private appService: AppService) { }

  ngOnInit() {
  }
}
