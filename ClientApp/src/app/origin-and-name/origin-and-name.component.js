"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var content_item_1 = require("../resources/content-item");
var OriginAndNameComponent = /** @class */ (function () {
    function OriginAndNameComponent(app) {
        this.app = app;
        this.prayers = new content_item_1.DefaultContentItem("origin-and-name-prayers", "Prayers", OriginAndNameComponent_1.originAndNamePath);
        this.origin = new content_item_1.DefaultContentItem("origin", "Origin", OriginAndNameComponent_1.originAndNamePath);
        this.stDominic = new content_item_1.DefaultContentItem("st-dominic", "St. Dominic", OriginAndNameComponent_1.originAndNamePath);
        this.whatIsTheRosary = {
            id: "what-is-the-rosary",
            text: "What is the Rosary?",
            get path() {
                return OriginAndNameComponent_1.originAndNamePath + "#" + this.id;
            }
        };
        this.kindsOfPrayer = {
            id: "kinds-of-prayers",
            text: "What kinds of prayer is the Rosary made up of?",
            get path() {
                return OriginAndNameComponent_1.originAndNamePath + "#" + this.id;
            }
        };
        this.vocalPrayers = {
            id: "vocal-prayers",
            text: "What are the vocal prayers of the Rosary?",
            get path() {
                return OriginAndNameComponent_1.originAndNamePath + "#" + this.id;
            }
        };
        this.mentalPrayers = {
            id: "mental-prayers",
            text: "What are the mental prayers of the Rosary?",
            get path() {
                return OriginAndNameComponent_1.originAndNamePath + "#" + this.id;
            }
        };
        this.fruitOfTheMysteries = {
            id: "fruit-of-the-mysteries",
            text: "What are the fruits of the Mysteries of the Rosary?",
            get path() {
                return OriginAndNameComponent_1.originAndNamePath + "#" + this.id;
            }
        };
        this.seriesOfTheRosary = {
            id: "series-of-the-rosary",
            text: "What are the series of the Rosary?",
            get path() {
                return OriginAndNameComponent_1.originAndNamePath + "#" + this.id;
            }
        };
        this.originOfTheRosary = {
            id: "origin-of-the-rosary",
            text: "What is the origin of the “Rosary”?",
            get path() {
                return OriginAndNameComponent_1.originAndNamePath + "#" + this.id;
            }
        };
        this.evolutionOfTheRosary = {
            id: "evolution-of-the-rosary",
            text: "How has the Rosary evolved since its origins?",
            get path() {
                return OriginAndNameComponent_1.originAndNamePath + "#" + this.id;
            }
        };
        this.stDominicStory = new content_item_1.DefaultContentItem("st-dominic-story", "What is the full story of how St. Dominic received the rosary?", OriginAndNameComponent_1.originAndNamePath);
        this.whyStDominicRecievedRosary = {
            id: "why-st-dominic-recieved-rosary",
            text: "Why did St. Dominic recieve the Rosary?",
            get path() {
                return OriginAndNameComponent_1.originAndNamePath + "#" + this.id;
            }
        };
        this.notreDameSermonStory = new content_item_1.DefaultContentItem("notre-dame-sermon-story", "What is the story of the sermon St. Dominic preached at Notre Dame in  Paris on the feast of St John the Evangelist?", OriginAndNameComponent_1.originAndNamePath);
        this.rosaryWeapon = {
            id: "rosary-weapon",
            text: "How did St. Dominic use the Rosary as a weapon?",
            get path() {
                return OriginAndNameComponent_1.originAndNamePath + "#" + this.id;
            }
        };
        this.whyIsPreachingIneffective = new content_item_1.DefaultContentItem("why-is-preaching-ineffective", "Why is preaching against sin at the outset ineffective?", OriginAndNameComponent_1.originAndNamePath);
        this.weaponAgainstSin = {
            id: "weapon-against-sin",
            text: "Why is the Rosary a powerful weapon against sin?",
            get path() {
                return OriginAndNameComponent_1.originAndNamePath + "#" + this.id;
            }
        };
        this.whyLovePrayer = new content_item_1.DefaultContentItem("why-love-prayer", "Why should priests kindle a love of prayer in people's hearts, especially the Angelic Psalter?", OriginAndNameComponent_1.originAndNamePath);
        this.rainFromHeaven = {
            id: "rain-from-heaven",
            text: "Why is the Angelic Salutation sometimes called “rain from heaven”?",
            get path() {
                return OriginAndNameComponent_1.originAndNamePath + "#" + this.id;
            }
        };
        this.whyPrayHailMaryBeforeSermons = {
            id: "why-pray-hail-mary-before-sermons",
            text: "Why is the Hail Mary prayed before sermons?",
            get path() {
                return OriginAndNameComponent_1.originAndNamePath + "#" + this.id;
            }
        };
        this.whyUrgeTheRosary = {
            id: "why-urge-the-rosary",
            text: "Why does urging people to pray the Rosary in sermons allow it to bear much fruit?",
            get path() {
                return OriginAndNameComponent_1.originAndNamePath + "#" + this.id;
            }
        };
        // Blessed Alan
        this.blessedAlan = new content_item_1.DefaultContentItem("blessed-alan", "Blessed Alan de la Roche", OriginAndNameComponent_1.originAndNamePath);
        this.whyRosaryWasNeglected = new content_item_1.DefaultContentItem("why-rosary-was-neglected", "Why did people begin to neglect the Rosary after the first century that the Rosary Confraternity was established by St. Dominic?", OriginAndNameComponent_1.originAndNamePath);
        this.consequenceOfNeglect = new content_item_1.DefaultContentItem("consequence-of-neglect", "What was the consequence of neglecting God’s grace and the Rosary?", OriginAndNameComponent_1.originAndNamePath);
        this.whyBlessedAlanChosen = new content_item_1.DefaultContentItem("why-blessed-alan-chosen", "Why did Our Lady choose Blessed Alan de la Roche to revive the Rosary Confraternity?", OriginAndNameComponent_1.originAndNamePath);
        this.howAlanReceivedMessage = new content_item_1.DefaultContentItem("how-alan-recieved-message", "How did Blessed Alan receive his urgent message to reestablish the Rosary Confraternity?", OriginAndNameComponent_1.originAndNamePath);
        // Confraternity
        this.confraternity = new content_item_1.DefaultContentItem("confraternity", "Confraternity", OriginAndNameComponent_1.originAndNamePath);
        this.kindsOfMembership = new content_item_1.DefaultContentItem("kinds-of-membership", "What kinds of membership are there in the Rosary Confraternity?", OriginAndNameComponent_1.originAndNamePath);
        this.failMembershipObligations = new content_item_1.DefaultContentItem("fail-membership-obligations", "Is it a sin to fail to fulfill your membership obligation to say the Rosary?", OriginAndNameComponent_1.originAndNamePath);
        this.rosaryClashesWithDuties = new content_item_1.DefaultContentItem("rosary-clashes-with-duties", "What if saying the Rosary clashes with your duties or health?", OriginAndNameComponent_1.originAndNamePath);
        this.unableToSayRosary = new content_item_1.DefaultContentItem("unable-to-say-rosary", "Will you still receive the benefits of the Confraternity if you are unable to say the Rosary or genuinely forget?", OriginAndNameComponent_1.originAndNamePath);
        this.failDueToCarelessness = new content_item_1.DefaultContentItem("fail-due-to-carelessness", "What if you fail to say the Rosary out of carelessness or lazyness?", OriginAndNameComponent_1.originAndNamePath);
        // Mary's Psalter
        this.marysPsalter = new content_item_1.DefaultContentItem("marys-psalter", "Mary's Psalter", OriginAndNameComponent_1.originAndNamePath);
        this.whyMarysPsalter = new content_item_1.DefaultContentItem("why-marys-psalter", "Why was the Rosary called the “Psalter of Jesus and Mary” until devotion to it was reestablished by Blessed Alan in 1460?", OriginAndNameComponent_1.originAndNamePath);
        this.whyBetterThanPsalms = new content_item_1.DefaultContentItem("why-better-than-psalms", "Why can the Rosary be considered more valuable than the Psalms of David?", OriginAndNameComponent_1.originAndNamePath);
        this.whyThreeParts = new content_item_1.DefaultContentItem("why-three-parts", "Why is the Rosary divided up into three parts?", OriginAndNameComponent_1.originAndNamePath);
        // Crown of Roses
        this.crownOfRoses = new content_item_1.DefaultContentItem("crown-of-roses", "Crown of Roses", OriginAndNameComponent_1.originAndNamePath);
        this.whyCrownOfRoses = new content_item_1.DefaultContentItem("why-crown-of-roses", "Why is the Rosary a “Crown of Roses”?", OriginAndNameComponent_1.originAndNamePath);
        this.prayersSymbolizedAsRoses = new content_item_1.DefaultContentItem("prayers-symbolized-as-roses", "How are the prayers of the Rosary symbolized in terms of roses?", OriginAndNameComponent_1.originAndNamePath);
        this.alphonsusStory = new content_item_1.DefaultContentItem("alphonsusStory", "What is the story of the Jesuit, Brother Alphonsus Rodriguez, who said his Rosary with great fervor?", OriginAndNameComponent_1.originAndNamePath);
        this.youngFrierStory = new content_item_1.DefaultContentItem("young-frier-story", "What do the chronicles of Saint Francis tell about the young frier who said the Rosary before dinner?", OriginAndNameComponent_1.originAndNamePath);
        // Marvels of the Rosary
        this.marvelsOfTheRosary = new content_item_1.DefaultContentItem("marvels-of-the-rosary", "Marvels of the Rosary", OriginAndNameComponent_1.originAndNamePath);
        this.stDominicReward = new content_item_1.DefaultContentItem("st-dominic-reward", "How did Our Lady reward St. Dominic for his devotion to the Rosary?", OriginAndNameComponent_1.originAndNamePath);
        this.blessedAlanReward = new content_item_1.DefaultContentItem("blessed-alan-reward", "How did Our Lady reward Blessed Alan de la Roche for his devotion to the Rosary?", OriginAndNameComponent_1.originAndNamePath);
        this.whoOurLadyRewards = new content_item_1.DefaultContentItem("who-our-lady-rewards", "Who does Our Lady reward?", OriginAndNameComponent_1.originAndNamePath);
        this.kingAlphonsusStory = new content_item_1.DefaultContentItem("king-alphonsus-story", "What is the story of King Alphonsus and the Rosary he wore on his belt?", OriginAndNameComponent_1.originAndNamePath);
        this.whyFollowRosaryDevotions = new content_item_1.DefaultContentItem("why-follow-rosary-devotions", "Why should people who love the Blessed Virgin follow the example of King Alphonsus and the saints who were devoted to the Rosary?", OriginAndNameComponent_1.originAndNamePath);
        // Enemies
        this.enemies = new content_item_1.DefaultContentItem("enemies", "Enemies", OriginAndNameComponent_1.originAndNamePath);
        this.whoAreEnemies = new content_item_1.DefaultContentItem("who-are-enemies", "Who are the enemies of the Rosary?", OriginAndNameComponent_1.originAndNamePath);
        this.freethinkers = new content_item_1.DefaultContentItem("freethinkers", "Why have “freethinkers” who scorn religion and the Rosary absorbed the poisons of hell and have been inspired by the devil?", OriginAndNameComponent_1.originAndNamePath);
        this.dangerOfFreethinkers = new content_item_1.DefaultContentItem("danger-of-freethinkers", "What is the danger of being like freethinkers who scorn the Rosary?", OriginAndNameComponent_1.originAndNamePath);
        // Other
        this.whyPerserveranceIsImportant = {
            id: "why-perserverence-is-important",
            text: "Why is perseverance important in praying the Rosary?",
            get path() {
                return OriginAndNameComponent_1.originAndNamePath + "#" + this.id;
            }
        };
        this.whatDoesRosaryMean = {
            id: "what-does-rosary-mean",
            text: "What does the name “Rosary” mean?",
            get path() {
                return OriginAndNameComponent_1.originAndNamePath + "#" + this.id;
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
        this.essenceOfRosary = {
            id: "essence-of-rosary",
            text: "What is the essence of the Rosary today?",
            get path() {
                return OriginAndNameComponent_1.originAndNamePath + "#" + this.id;
            }
        };
    }
    OriginAndNameComponent_1 = OriginAndNameComponent;
    var OriginAndNameComponent_1;
    OriginAndNameComponent.originAndNamePath = "origin-and-name";
    OriginAndNameComponent = OriginAndNameComponent_1 = __decorate([
        core_1.Component({
            selector: 'origin-and-name',
            templateUrl: './origin-and-name.component.html',
            styleUrls: ['./origin-and-name.component.css']
        })
    ], OriginAndNameComponent);
    return OriginAndNameComponent;
}());
exports.OriginAndNameComponent = OriginAndNameComponent;
//# sourceMappingURL=origin-and-name.component.js.map