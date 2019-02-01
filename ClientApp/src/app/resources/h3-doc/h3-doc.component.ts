import { Component, OnInit, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { ContentItem } from '../content-item';
import { faLink, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-h3-doc',
  templateUrl: './h3-doc.component.html',
  styleUrls: ['./h3-doc.component.css']
})
export class H3DocComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() contentItem: ContentItem;
  faHeaderLink: IconDefinition = faLink;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let that = this;
    $(that.getHeaderId()).on("mouseover", function () {
      $(that.getLinkSelector()).css({ display: "inline" });
    });
    $(that.getHeaderId()).on("mouseout", function () {
      $(that.getLinkSelector()).css({ display: "none" });
    });
  }

  ngOnDestroy() {
    $(this.getHeaderId()).off();
  }

  private getLinkSelector(): string {
    return this.getHeaderId() + " .header-link";
  }

  private getHeaderId(): string {
    return "#" + this.contentItem.id;
  }
}
