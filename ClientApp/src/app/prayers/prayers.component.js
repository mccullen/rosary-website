"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PrayersComponent = /** @class */ (function () {
    function PrayersComponent(appService) {
        this.vocalPrayers = {
            id: "vocal-prayers",
            text: "What are vocal prayers compose the Rosary?",
            get path() {
                return PrayersComponent_1.prayersPath + "#" + this.id;
            }
        };
        this.otherPrayers = {
            id: "other-prayers",
            text: "Are there other prayers that compose the Rosary?",
            get path() {
                return PrayersComponent_1.prayersPath + "#" + this.id;
            }
        };
        this.bodyOfRosary = {
            id: "body-of-rosary",
            text: "Why are the vocal prayers sometimes called the “body” of the Rosary?",
            get path() {
                return PrayersComponent_1.prayersPath + "#" + this.id;
            }
        };
        this.appService = appService;
    }
    PrayersComponent_1 = PrayersComponent;
    var PrayersComponent_1;
    PrayersComponent.prayersPath = "prayers";
    PrayersComponent = PrayersComponent_1 = __decorate([
        core_1.Component({
            selector: "prayers",
            templateUrl: "./prayers.component.html"
        })
    ], PrayersComponent);
    return PrayersComponent;
}());
exports.PrayersComponent = PrayersComponent;
//# sourceMappingURL=prayers.component.js.map