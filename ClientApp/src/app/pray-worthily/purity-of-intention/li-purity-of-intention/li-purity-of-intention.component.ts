import { Component, OnInit } from '@angular/core';
import { PurityOfIntentionService } from '../purity-of-intention.service';
import { ContentItem } from '../../../resources/content-item';

@Component({
  selector: 'app-li-purity-of-intention',
  templateUrl: './li-purity-of-intention.component.html',
  styleUrls: ['./li-purity-of-intention.component.css']
})
export class LiPurityOfIntentionComponent implements OnInit {

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
