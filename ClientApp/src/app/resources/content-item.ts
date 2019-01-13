import { Type } from "@angular/core";

export interface ContentItem {
  id: string;
  text: string;
  path: string;
  linkComponent?: Type<any>;
  bodyComponent?: Type<any>;
}
