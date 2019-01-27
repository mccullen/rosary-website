import { Component, OnInit } from '@angular/core';
import { ContentItem, DefaultContentItem } from '../resources/content-item';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dedication',
  templateUrl: './dedication.component.html',
  styleUrls: ['./dedication.component.css']
})
export class DedicationComponent implements OnInit {

  static dedicationPath: string = "dedication";

  toPriests: ContentItem = new DefaultContentItem(
    "to-priests",
    "A White Rose for Priests",
    DedicationComponent.dedicationPath);

  whyWasTheRosaryGiven: ContentItem = new DefaultContentItem(
    "why-was-the-rosary-given",
    "Why has Almighty God given priests the Rosary?",
    DedicationComponent.dedicationPath);

  howPriestsSpreadDevotion: ContentItem = new DefaultContentItem(
    "how-priests-spread-devotion",
    "How must priests spread devotion to the Rosary?",
    DedicationComponent.dedicationPath);

  howMuchGoodFromPreaching: ContentItem = new DefaultContentItem(
    "how-much-good-from-preaching",
    "How much good comes from priests who preach devotion to the Rosary?",
    DedicationComponent.dedicationPath);

  whyPreachingIsntEnough: ContentItem = new DefaultContentItem(
    "why-preaching-isnt-enough",
    "Why isn’t merely preaching the Rosary enough?",
    DedicationComponent.dedicationPath);

  constructor(public appService: AppService) { }

  ngOnInit() {
  }
}
