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

  whyNotOfLittleImportance: ContentItem = new DefaultContentItem(
    "why-not-of-little-importance",
    "Why is the Rosary not of little importance?",
    DedicationComponent.dedicationPath);

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

  toSinners: ContentItem = new DefaultContentItem(
    "to-sinners",
    "A Red Rose for Sinners",
    DedicationComponent.dedicationPath);

  sinnersCrown: ContentItem = new DefaultContentItem(
    "sinners-crown",
    "What is the crown of roses of unbelievers and unrepetant sinners?",
    DedicationComponent.dedicationPath);

  rosaryCrown: ContentItem = new DefaultContentItem(
    "rosary-crown",
    "What is the crown of roses of the Holy Rosary?",
    DedicationComponent.dedicationPath);

  cruelThorns: ContentItem = new DefaultContentItem(
    "cruel-thorns",
    "Why is the crown of roses of sinners called 'cruel thorns' which puts them in danger?",
    DedicationComponent.dedicationPath);

  jesusThorns: ContentItem = new DefaultContentItem(
    "jesus-thorns",
    "Why is the crown of roses of the Rosary called thorns of Jesus Christ?",
    DedicationComponent.dedicationPath);

  whatToDoForCrown: ContentItem = new DefaultContentItem(
    "what-to-do-for-crown",
    "What should sinners do to crown ourselves with these roses from Heaven?",
    DedicationComponent.dedicationPath);

  whyReciteRosaryEveryDay: ContentItem = new DefaultContentItem(
    "why-recite-rosary-every-day",
    "Why should us sinners recite the entire Rosary every day for this crown of roses from Heaven?",
    DedicationComponent.dedicationPath);

  constructor(public appService: AppService) { }

  ngOnInit() {
  }
}
