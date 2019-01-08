import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ContentItem } from '../resources/content-item';

@Component({
  selector: 'app-wonders',
  templateUrl: './wonders.component.html',
  styleUrls: ['./wonders.component.css']
})
export class WondersComponent implements OnInit {

  static wondersPath: string = "wonders";

  whatWonders: ContentItem = {
    id: "what-wonders",
    text: "What wonders has God worked through the Rosary?",
    get path() {
      return WondersComponent.wondersPath + "#" + this.id;
    }
  };

  constructor(private appService: AppService) { }

  ngOnInit() {
  }
}
