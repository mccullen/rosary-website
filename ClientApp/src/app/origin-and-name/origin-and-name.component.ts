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

  // Blessed Alan
  blessedAlan: ContentItem = new DefaultContentItem(
    "blessed-alan",
    "Blessed Alan de la Roche",
    OriginAndNameComponent.originAndNamePath);

  whyRosaryWasNeglected: ContentItem = new DefaultContentItem(
    "why-rosary-was-neglected",
    "Why did people begin to neglect the Rosary after the first century that the Rosary Confraternity was established by St. Dominic?",
    OriginAndNameComponent.originAndNamePath
  );

  consequenceOfNeglect: ContentItem = new DefaultContentItem(
    "consequence-of-neglect",
    "What was the consequence of neglecting God’s grace and the Rosary?",
    OriginAndNameComponent.originAndNamePath);

  whyBlessedAlanChosen: ContentItem = new DefaultContentItem(
    "why-blessed-alan-chosen",
    "Why did Our Lady choose Blessed Alan de la Roche to revive the Rosary Confraternity?",
    OriginAndNameComponent.originAndNamePath);

  howAlanReceivedMessage: ContentItem = new DefaultContentItem(
    "how-alan-recieved-message",
    "How did Blessed Alan receive his urgent message to reestablish the Rosary Confraternity?",
    OriginAndNameComponent.originAndNamePath);

  // Confraternity
  confraternity: ContentItem = new DefaultContentItem(
    "confraternity",
    "Confraternity",
    OriginAndNameComponent.originAndNamePath);

  kindsOfMembership: ContentItem = new DefaultContentItem(
    "kinds-of-membership",
    "What kinds of membership are there in the Rosary Confraternity?",
    OriginAndNameComponent.originAndNamePath);

  failMembershipObligations = new DefaultContentItem(
    "fail-membership-obligations",
    "Is it a sin to fail to fulfill your membership obligation to say the Rosary?",
    OriginAndNameComponent.originAndNamePath);

  rosaryClashesWithDuties = new DefaultContentItem(
    "rosary-clashes-with-duties",
    "What if saying the Rosary clashes with your duties or health?",
    OriginAndNameComponent.originAndNamePath);

  unableToSayRosary = new DefaultContentItem(
    "unable-to-say-rosary",
    "Will you still receive the benefits of the Confraternity if you are unable to say the Rosary or genuinely forget?",
    OriginAndNameComponent.originAndNamePath);

  failDueToCarelessness = new DefaultContentItem(
    "fail-due-to-carelessness",
    "What if you fail to say the Rosary out of carelessness or lazyness?",
    OriginAndNameComponent.originAndNamePath);

  // Mary's Psalter
  marysPsalter = new DefaultContentItem(
    "marys-psalter",
    "Mary's Psalter",
    OriginAndNameComponent.originAndNamePath);

  whyMarysPsalter = new DefaultContentItem(
    "why-marys-psalter",
    "Why was the Rosary called the “Psalter of Jesus and Mary” until devotion to it was reestablished by Blessed Alan in 1460?",
    OriginAndNameComponent.originAndNamePath);

  whyBetterThanPsalms = new DefaultContentItem(
    "why-better-than-psalms",
    "Why can the Rosary be considered more valuable than the Psalms of David?",
    OriginAndNameComponent.originAndNamePath);

  whyThreeParts = new DefaultContentItem(
    "why-three-parts",
    "Why is the Rosary divided up into three parts?",
    OriginAndNameComponent.originAndNamePath);

  // Crown of Roses
  crownOfRoses = new DefaultContentItem(
    "crown-of-roses",
    "Crown of Roses",
    OriginAndNameComponent.originAndNamePath);

  whyCrownOfRoses = new DefaultContentItem(
    "why-crown-of-roses",
    "Why is the Rosary a “Crown of Roses”?",
    OriginAndNameComponent.originAndNamePath);
  
  prayersSymbolizedAsRoses = new DefaultContentItem(
    "prayers-symbolized-as-roses",
    "How are the prayers of the Rosary symbolized in terms of roses?",
    OriginAndNameComponent.originAndNamePath);

  alphonsusStory = new DefaultContentItem(
    "alphonsusStory",
    "What is the story of the Jesuit, Brother Alphonsus Rodriguez, who said his Rosary with great fervor?",
    OriginAndNameComponent.originAndNamePath);

  youngFrierStory = new DefaultContentItem(
    "young-frier-story",
    "What do the chronicles of Saint Francis tell about the young frier who said the Rosary before dinner?",
    OriginAndNameComponent.originAndNamePath);

  // Other

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

  /*
  crownOfRoses: ContentItem = {
    id: "crown-of-roses",
    text: "Why is the Rosary a “Crown of Roses”?",
    get path() {
      return OriginAndNameComponent.originAndNamePath + "#" + this.id;
    }
  };*/

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
