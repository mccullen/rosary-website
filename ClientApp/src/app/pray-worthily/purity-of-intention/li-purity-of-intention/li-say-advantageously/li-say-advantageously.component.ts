import { Component, OnInit } from '@angular/core';
import { PrayWorthilyService } from '../../../pray-worthily.service';
import { PurityOfIntentionService } from '../../purity-of-intention.service';
import { ContentItem } from '../../../../resources/content-item';

@Component({
  selector: 'app-li-say-advantageously',
  templateUrl: './li-say-advantageously.component.html',
  styleUrls: ['./li-say-advantageously.component.css']
})
export class LiSayAdvantageouslyComponent implements OnInit {

  sayAdventageously: ContentItem;

  constructor(private purityOfIntentionService: PurityOfIntentionService) { }

  ngOnInit() {
    this.getSayAdventageously();
  }

  private getSayAdventageously() {
    this.purityOfIntentionService.getSayAdventageously()
      .subscribe(sayAdventageously => this.sayAdventageously = sayAdventageously);
  }
}
