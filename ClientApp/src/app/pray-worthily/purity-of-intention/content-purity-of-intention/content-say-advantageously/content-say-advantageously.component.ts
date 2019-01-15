import { Component, OnInit } from '@angular/core';
import { PurityOfIntentionService } from '../../purity-of-intention.service';
import { ContentItem } from '../../../../resources/content-item';

@Component({
  selector: 'app-content-say-advantageously',
  templateUrl: './content-say-advantageously.component.html',
  styleUrls: ['./content-say-advantageously.component.css']
})
export class ContentSayAdvantageouslyComponent implements OnInit {

  sayAdvantageously: ContentItem;

  constructor(private purityOfIntentionService: PurityOfIntentionService) { }

  ngOnInit() {
    this.getSayAdvantageously();
  }

  private getSayAdvantageously() {
    this.purityOfIntentionService.getSayAdventageously()
      .subscribe(sayAdventageously => this.sayAdvantageously = sayAdventageously);
  }
}
