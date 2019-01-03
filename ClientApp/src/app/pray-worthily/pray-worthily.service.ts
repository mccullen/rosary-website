import { AppService } from '../app.service';
import { Injectable, Inject } from '@angular/core';

@Injectable()
export class PrayWorthilyService {
  joyfulMysteriesPath: string = "";

  constructor(private appService: AppService) {
    this.joyfulMysteriesPath = appService.baseUrl + 'api/PrayWorthily/GetJoyfulMysteriesHandout';
  }
}
