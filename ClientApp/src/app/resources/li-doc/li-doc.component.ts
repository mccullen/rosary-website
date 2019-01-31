import { Component, OnInit, Input } from '@angular/core';
import { ContentItem } from '../content-item';

@Component({
  selector: 'app-li-doc',
  templateUrl: './li-doc.component.html',
  styleUrls: ['./li-doc.component.css']
})
export class LiDocComponent implements OnInit {
  @Input() contentItem: ContentItem;

  constructor() { }

  ngOnInit() {
  }
}
