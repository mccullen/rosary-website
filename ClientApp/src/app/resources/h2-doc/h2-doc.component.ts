import { Component, OnInit, Input } from '@angular/core';
import { ContentItem } from '../content-item';

@Component({
  selector: 'app-h2-doc',
  templateUrl: './h2-doc.component.html',
  styleUrls: ['./h2-doc.component.css']
})
export class H2DocComponent implements OnInit {
  @Input() contentItem: ContentItem;

  constructor() { }

  ngOnInit() {
  }
}
