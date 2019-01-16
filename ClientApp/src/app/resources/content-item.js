"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultContentItem = /** @class */ (function () {
    function DefaultContentItem(id, text, pathPrefix) {
        this.id = id;
        this.text = text;
        this.path = pathPrefix + "#" + this.id;
    }
    return DefaultContentItem;
}());
exports.DefaultContentItem = DefaultContentItem;
//# sourceMappingURL=content-item.js.map