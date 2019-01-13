import { AppService } from '../app.service';
import { Injectable, Inject } from '@angular/core';
import { ContentItem } from '../resources/content-item';
import { PrayersComponent } from '../prayers/prayers.component';


@Injectable()
export class PrayWorthilyService {
  joyfulMysteriesPath: string = "";
    appService: AppService;

  constructor(appService: AppService) {
    this.appService = appService;
    this.joyfulMysteriesPath = appService.baseUrl + 'api/PrayWorthily/GetJoyfulMysteriesHandout';
  }
}
