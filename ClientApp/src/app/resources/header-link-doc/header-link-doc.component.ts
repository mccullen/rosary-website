import { Component, OnInit, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { faLink, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ContentItem } from '../content-item';

@Component({
  selector: 'app-header-link-doc',
  templateUrl: './header-link-doc.component.html',
  styleUrls: ['./header-link-doc.component.css']
})
export class HeaderLinkDocComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() size: string;
  @Input() contentItem: ContentItem;
  faHeaderLink: IconDefinition = faLink;

  constructor() { }

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
