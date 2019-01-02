import { Component } from '@angular/core';
import { ContentItem } from '../resources/content-item';
import { PrayWorthilyService } from './pray-worthily.service';

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

  constructor(prayWorthilyService: PrayWorthilyService) {
    this.joyfulMysteriesPath = prayWorthilyService.joyfulMysteriesPath;
  }
}
