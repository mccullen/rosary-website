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
            templateUrl: './origin-and-name.component.html'
        })
    ], OriginAndNameComponent);
    return OriginAndNameComponent;
}());
exports.OriginAndNameComponent = OriginAndNameComponent;
//# sourceMappingURL=origin-and-name.component.js.map