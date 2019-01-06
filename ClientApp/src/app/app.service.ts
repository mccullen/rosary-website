import { Injectable, Inject } from '@angular/core';

@Injectable()
export class AppService {
  baseUrl: string;
  secretOfTheRosaryLink: string =
    "http://www.montfortian.info/writings/the-admirable-secret-of-the-rosary.html";
  onTheRosaryLink: string =
    "https://w2.vatican.va/content/john-paul-ii/en/apost_letters/2002/documents/hf_jp-ii_apl_20021016_rosarium-virginis-mariae.html";

  constructor(@Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }
}
