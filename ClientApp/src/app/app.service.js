"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppService = /** @class */ (function () {
    function AppService(baseUrl) {
        this.secretOfTheRosaryLink = "http://www.montfortian.info/writings/the-admirable-secret-of-the-rosary.html";
        this.onTheRosaryLink = "https://w2.vatican.va/content/john-paul-ii/en/apost_letters/2002/documents/hf_jp-ii_apl_20021016_rosarium-virginis-mariae.html";
        this.holySeeRosaryLink = "http://www.vatican.va/special/rosary/documents/misteri_en.html";
        this.fifteenPromisesLink = "http://www.rosary-center.org/conprom.htm";
        this.indulgencesLink = "https://www.rosarycenter.org/indulgences/";
        this.stMontfortMethodsOfPrayingLink = "http://www.montfortian.info/writings/methods-of-reciting-the-rosary.html";
        this.baseUrl = baseUrl;
    }
    AppService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject('BASE_URL'))
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map