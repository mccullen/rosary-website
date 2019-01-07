"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var OriginAndNameComponent = /** @class */ (function () {
    function OriginAndNameComponent(app) {
        this.app = app;
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
            text: "What are the four series of the Rosary?",
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
        this.whyStDominicRecievedRosary = {
            id: "why-st-dominic-recieved-rosary",
            text: "Why did St. Dominic received the Rosary?",
            get path() {
                return OriginAndNameComponent_1.originAndNamePath + "#" + this.id;
            }
        };
        this.rosaryWeapon = {
            id: "rosary-weapon",
            text: "How did St. Dominic use the Rosary as a weapon?",
            get path() {
                return OriginAndNameComponent_1.originAndNamePath + "#" + this.id;
            }
        };
        this.weaponAgainstSin = {
            id: "weapon-against-sin",
            text: "Why is the Rosary a powerful weapon against sin?",
            get path() {
                return OriginAndNameComponent_1.originAndNamePath + "#" + this.id;
            }
        };
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
        this.crownOfRoses = {
            id: "crown-of-roses",
            text: "Why is the Rosary a “Crown of Roses”?",
            get path() {
                return OriginAndNameComponent_1.originAndNamePath + "#" + this.id;
            }
        };
        this.essenceOfRosary = {
            id: "essence-of-rosary",
            text: "What is the essence of the Rosary today?",
            get path() {
                return OriginAndNameComponent_1.originAndNamePath + "#" + this.id;
            }
        };
    }
    OriginAndNameComponent_1 = OriginAndNameComponent;
    Object.defineProperty(OriginAndNameComponent.prototype, "originAndNamePath", {
        get: function () {
            return OriginAndNameComponent_1.originAndNamePath;
        },
        enumerable: true,
        configurable: true
    });
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