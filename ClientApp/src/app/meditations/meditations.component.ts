import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ContentItem } from '../resources/content-item';

@Component({
  selector: 'app-meditations',
  templateUrl: './meditations.component.html',
  styleUrls: ['./meditations.component.css']
})
export class MeditationsComponent implements OnInit {

  static meditationsPath: string = "meditations";

  whatIsAMystery: ContentItem = {
    id: "what-is-a-mystery",
    text: "What is a “mystery”?",
    get path() {
      return MeditationsComponent.meditationsPath + "#" + this.id;
    }
  };

  howManyMysteries: ContentItem = {
    id: "how-many-mysteries",
    text: "How many mysteries are in the Rosary?",
    get path() {
      return MeditationsComponent.meditationsPath + "#" + this.id;
    }
  };

  howAreMysteriesGrouped: ContentItem = {
    id: "how-are-mysteries-grouoped",
    text: "How are the mysteries grouped?",
    get path() {
      return MeditationsComponent.meditationsPath + "#" + this.id;
    }
  };

  soulOfRosary: ContentItem = {
    id: "soul-of-rosary",
    text: "Why are the meditations sometimes called the “soul” of the Rosary?",
    get path() {
      return MeditationsComponent.meditationsPath + "#" + this.id;
    }
  };

  constructor(private appService: AppService) { }

  ngOnInit() {
  }
}
