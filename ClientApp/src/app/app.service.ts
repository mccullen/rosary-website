import { Injectable, Inject } from '@angular/core';

@Injectable()
export class AppService {
  baseUrl: string;
  secretOfTheRosaryLink: string =
    "http://www.montfortian.info/writings/the-admirable-secret-of-the-rosary.html";

  constructor(@Inject('BASE_URL') baseUrl: string) {
    debugger;
    this.baseUrl = baseUrl;
  }
}
