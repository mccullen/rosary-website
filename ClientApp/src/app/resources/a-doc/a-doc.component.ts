import { Component, OnInit, Input } from '@angular/core';
import { ContentItem } from '../content-item';

@Component({
  selector: 'app-a-doc',
  templateUrl: './a-doc.component.html',
  styleUrls: ['./a-doc.component.css']
})
export class ADocComponent implements OnInit {
  @Input() contentItem: ContentItem;

  constructor() { }

  ngOnInit() {
  }
}
