import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ContentItem } from '../../resources/content-item';
import { sayAdventageously, purityOfIntention } from './purity-of-intention-data';

@Injectable()
export class PurityOfIntentionService {

  constructor() { }

  getSayAdventageously(): Observable<ContentItem> {
    return of(sayAdventageously);
  }

  getPurityOfIntention(): Observable<ContentItem> {
    return of(purityOfIntention);
  }
}
