import { AppService } from '../app.service';
import { Injectable, Inject } from '@angular/core';

@Injectable()
export class PrayWorthilyService {
  joyfulMysteriesPath: string = "";
    appService: AppService;

  constructor(appService: AppService) {
    this.appService = appService;
    this.joyfulMysteriesPath = appService.baseUrl + 'api/PrayWorthily/GetJoyfulMysteriesHandout';
  }
}
