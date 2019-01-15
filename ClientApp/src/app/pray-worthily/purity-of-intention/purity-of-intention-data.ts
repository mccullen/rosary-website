import { ContentItem } from "../../resources/content-item";
import { PrayWorthilyComponent } from "../pray-worthily.component";

let basePath: string = PrayWorthilyComponent.prayWorthilyPath + "#";

let purityOfIntention: ContentItem = {
  id: "purity-of-intention",
  text: "Purity of intention",
  get path() {
    return basePath + this.id;
  }
};
export { purityOfIntention };

let sayAdventageously: ContentItem = {
  id: "say-adventageously",
  text: "Say Adventageously",
  get path() {
    return basePath + this.id;
  }
};
export { sayAdventageously };
