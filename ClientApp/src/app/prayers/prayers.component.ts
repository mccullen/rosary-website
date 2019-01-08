import { Component } from '@angular/core';
import { ContentItem } from '../resources/content-item';
import { AppService } from '../app.service';

@Component({
  selector: "prayers",
  templateUrl: "./prayers.component.html"
})
export class PrayersComponent {
  static prayersPath: string = "prayers";

  vocalPrayers: ContentItem = {
    id: "vocal-prayers",
    text: "What are vocal prayers compose the Rosary?",
    get path() {
      return PrayersComponent.prayersPath + "#" + this.id;
    }
  };

  constructor(private appService: AppService) { }
}
