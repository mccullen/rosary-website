import { Component } from '@angular/core';
import { App } from '../app';
import { ContentItem } from '../resources/content-item';

@Component({
  selector: 'origin-and-name',
  templateUrl: './origin-and-name.component.html'
})
export class OriginAndNameComponent {
  static originAndNamePath: string = "origin-and-name";

  whatIsTheRosary: ContentItem = {
    id: "what-is-the-rosary",
    text: "What is the Rosary?",
    get path() {
      return OriginAndNameComponent.originAndNamePath + "#" + this.id;
    }
  };

  kindsOfPrayer: ContentItem = {
    id: "kinds-of-prayers",
    text: "What kinds of prayer is the Rosary made up of?",
    get path() {
      return OriginAndNameComponent.originAndNamePath + "#" + this.id;
    }
  };

  vocalPrayers: ContentItem = {
    id: "vocal-prayers",
    text: "What are the vocal prayers of the Rosary?",
    get path() {
      return OriginAndNameComponent.originAndNamePath + "#" + this.id;
    }
  };

  mentalPrayers: ContentItem = {
    id: "mental-prayers",
    text: "What are the mental prayers of the Rosary?",
    get path() {
      return OriginAndNameComponent.originAndNamePath + "#" + this.id;
    }
  };

  fruitOfTheMysteries: ContentItem = {
    id: "fruit-of-the-mysteries",
    text: "What are the fruits of the Mysteries of the Rosary?",
    get path() {
      return OriginAndNameComponent.originAndNamePath + "#" + this.id;
    }
  };

  constructor(private app: App) { }

  get originAndNamePath() {
    return OriginAndNameComponent.originAndNamePath;
  }
}
