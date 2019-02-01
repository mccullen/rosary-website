import { Component, OnInit, Input } from '@angular/core';
import { ContentItem } from '../content-item';

@Component({
  selector: 'app-h3-doc',
  templateUrl: './h3-doc.component.html',
  styleUrls: ['./h3-doc.component.css']
})
export class H3DocComponent implements OnInit {
  @Input() contentItem: ContentItem;

  constructor() {
  }

  ngOnInit() {
  }
}
