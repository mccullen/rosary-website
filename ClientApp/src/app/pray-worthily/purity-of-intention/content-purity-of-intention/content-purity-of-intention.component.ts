import { Component, OnInit } from '@angular/core';
import { PurityOfIntentionService } from '../purity-of-intention.service';
import { ContentItem } from '../../../resources/content-item';

@Component({
  selector: 'app-content-purity-of-intention',
  templateUrl: './content-purity-of-intention.component.html',
  styleUrls: ['./content-purity-of-intention.component.css']
})
export class ContentPurityOfIntentionComponent implements OnInit {

  purityOfIntention: ContentItem;

  constructor(private purityOfIntentionService: PurityOfIntentionService) { }

  ngOnInit() {
    this.getPurityOfIntention();
  }

  private getPurityOfIntention() {
    this.purityOfIntentionService.getPurityOfIntention()
      .subscribe(purityOfIntention => this.purityOfIntention = purityOfIntention);
  }
}
