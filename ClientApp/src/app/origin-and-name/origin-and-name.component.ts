import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { ContentItem, DefaultContentItem } from '../resources/content-item';

@Component({
  selector: 'origin-and-name',
  templateUrl: './origin-and-name.component.html',
  styleUrls: [ './origin-and-name.component.css' ]
})
export class OriginAndNameComponent {
  static originAndNamePath: string = "origin-and-name";

  prayers: ContentItem = new DefaultContentItem(
    "origin-and-name-prayers",
    "Prayers",
    OriginAndNameComponent.originAndNamePath);

  origin: ContentItem = new DefaultContentItem(
    "origin",
    "Origin",
    OriginAndNameComponent.originAndNamePath);

  stDominic: ContentItem = new DefaultContentItem(
    "st-dominic",
    "St. Dominic",
    OriginAndNameComponent.originAndNamePath);

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
    text: "What are the series of the Rosary?",
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

  stDominicStory: ContentItem = new DefaultContentItem(
    "st-dominic-story",
    "What is the full story of how St. Dominic received the rosary?",
    OriginAndNameComponent.originAndNamePath);

  whyStDominicRecievedRosary: ContentItem = {
    id: "why-st-dominic-recieved-rosary",
    text: "Why did St. Dominic recieve the Rosary?",
    get path() {
      return OriginAndNameComponent.originAndNamePath + "#" + this.id;
    }
  };

  notreDameSermonStory: ContentItem = new DefaultContentItem(
    "notre-dame-sermon-story",
    "What is the story of the sermon St. Dominic preached at Notre Dame in  Paris on the feast of St John the Evangelist?",
    OriginAndNameComponent.originAndNamePath);

  rosaryWeapon: ContentItem = {
    id: "rosary-weapon",
    text: "How did St. Dominic use the Rosary as a weapon?",
    get path() {
      return OriginAndNameComponent.originAndNamePath + "#" + this.id;
    }
  };

  whyIsPreachingIneffective: ContentItem = new DefaultContentItem(
    "why-is-preaching-ineffective",
    "Why is preaching against sin at the outset ineffective?",
    OriginAndNameComponent.originAndNamePath);

  weaponAgainstSin: ContentItem = {
    id: "weapon-against-sin",
    text: "Why is the Rosary a powerful weapon against sin?",
    get path() {
      return OriginAndNameComponent.originAndNamePath + "#" + this.id;
    }
  };

  whyLovePrayer: ContentItem = new DefaultContentItem(
    "why-love-prayer",
    "Why should priests kindle a love of prayer in people's hearts, especially the Angelic Psalter?",
    OriginAndNameComponent.originAndNamePath);

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

  whatDoesRosaryMean: ContentItem = {
    id: "what-does-rosary-mean",
    text: "What does the name “Rosary” mean?",
    get path() {
      return OriginAndNameComponent.originAndNamePath + "#" + this.id;
    }
  };

  crownOfRoses: ContentItem = {
    id: "crown-of-roses",
    text: "Why is the Rosary a “Crown of Roses”?",
    get path() {
      return OriginAndNameComponent.originAndNamePath + "#" + this.id;
    }
  };

  essenceOfRosary: ContentItem = {
    id: "essence-of-rosary",
    text: "What is the essence of the Rosary today?",
    get path() {
      return OriginAndNameComponent.originAndNamePath + "#" + this.id;
    }
  };

  constructor(public app: AppService) {
  }
}
