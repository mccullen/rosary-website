export interface ContentItem {
  id: string;
  text: string;
  path: string;
}

export class DefaultContentItem {
  id: string;
  text: string;
  path: string;

  constructor(id: string, text: string, pathPrefix: string) {
    this.id = id;
    this.text = text;
    this.path = pathPrefix + "#" + this.id;
  }
}
