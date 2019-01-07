import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { ContentItem } from '../resources/content-item';

@Component({
  selector: 'origin-and-name',
  templateUrl: './origin-and-name.component.html',
  styleUrls: [ './origin-and-name.component.css' ]
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

  seriesOfTheRosary: ContentItem = {
    id: "series-of-the-rosary",
    text: "What are the four series of the Rosary?",
    get path() {
      return OriginAndNameComponent.originAndNamePath + "#" + this.id;
    }
  };

  originOfTheRosary: ContentItem = {
    id: "origin-of-the-rosary",
    text: "What is the origin of the “Rosary”?",
    get path() {
      return OriginAndNameComponent.originAndNamePath + "#" + this.id;
    }
  };

  evolutionOfTheRosary: ContentItem = {
    id: "evolution-of-the-rosary",
    text: "How has the Rosary evolved since its origins?",
    get path() {
      return OriginAndNameComponent.originAndNamePath + "#" + this.id;
    }
  };

  whyStDominicRecievedRosary: ContentItem = {
    id: "why-st-dominic-recieved-rosary",
    text: "Why did St. Dominic received the Rosary?",
    get path() {
      return OriginAndNameComponent.originAndNamePath + "#" + this.id;
    }
  };

  rosaryWeapon: ContentItem = {
    id: "rosary-weapon",
    text: "How did St. Dominic use the Rosary as a weapon?",
    get path() {
      return OriginAndNameComponent.originAndNamePath + "#" + this.id;
    }
  };

  weaponAgainstSin: ContentItem = {
    id: "weapon-against-sin",
    text: "Why is the Rosary a powerful weapon against sin?",
    get path() {
      return OriginAndNameComponent.originAndNamePath + "#" + this.id;
    }
  };

  rainFromHeaven: ContentItem = {
    id: "rain-from-heaven",
    text: "Why is the Angelic Salutation sometimes called “rain from heaven”?",
    get path() {
      return OriginAndNameComponent.originAndNamePath + "#" + this.id;
    }
  };

  whyPrayHailMaryBeforeSermons: ContentItem = {
    id: "why-pray-hail-mary-before-sermons",
    text: "Why is the Hail Mary prayed before sermons?",
    get path() {
      return OriginAndNameComponent.originAndNamePath + "#" + this.id;
    }
  };

  whyUrgeTheRosary: ContentItem = {
    id: "why-urge-the-rosary",
    text: "Why does urging people to pray the Rosary in sermons allow it to bear much fruit?",
    get path() {
      return OriginAndNameComponent.originAndNamePath + "#" + this.id;
    }
  };

  whyPerserveranceIsImportant: ContentItem = {
    id: "why-perserverence-is-important",
    text: "Why is perseverance important in praying the Rosary?",
    get path() {
      return OriginAndNameComponent.originAndNamePath + "#" + this.id;
    }
  };

  constructor(private app: AppService) { }

  get originAndNamePath() {
    return OriginAndNameComponent.originAndNamePath;
  }
}
