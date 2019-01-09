import { Component } from '@angular/core';
import { ContentItem } from '../resources/content-item';
import { PrayWorthilyService } from './pray-worthily.service';
import { AppService } from '../app.service';

@Component({
  selector: 'pray-worthily',
  templateUrl: './pray-worthily.component.html'
})
export class PrayWorthilyComponent {
  static prayWorthilyPath: string = "pray-worthily";

  joyfulMysteriesPath: string;

  avoidDistractions: ContentItem = {
    id: "avoid-distractions",
    text: "How do you avoid distractions?",
    get path() {
      return PrayWorthilyComponent.prayWorthilyPath + "#" + this.id;
    }
  };

  methodsOfPraying: ContentItem = {
    id: "methods-of-praying",
    text: "What methods are there for saying the Rosary?",
    get path() {
      return PrayWorthilyComponent.prayWorthilyPath + "#" + this.id;
    }
  };

  groupRosary: ContentItem = {
    id: "group-rosary",
    text: "How do you pray the Rosary in a Group?",
    get path() {
      return PrayWorthilyComponent.prayWorthilyPath + "#" + this.id;
    }
  };

  handouts: ContentItem = {
    id: "handouts",
    text: "Do you have any handouts for praying the Rosary?",
    get path() {
      return PrayWorthilyComponent.prayWorthilyPath + "#" + this.id;
    }
  };
    prayWorthilyService: PrayWorthilyService;
    appService: AppService;

  constructor(
      prayWorthilyService: PrayWorthilyService,
      appService: AppService) {
    this.prayWorthilyService = prayWorthilyService;
    this.appService = appService;
    this.joyfulMysteriesPath = prayWorthilyService.joyfulMysteriesPath;
  }
}
