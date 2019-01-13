import { Component, OnInit, Input } from '@angular/core';
import { ContentItem } from '../../resources/content-item';

@Component({
  selector: 'app-avoid-distractions',
  templateUrl: './avoid-distractions.component.html',
  styleUrls: ['./avoid-distractions.component.css']
})
export class AvoidDistractionsComponent implements OnInit {

  @Input() avoidDistractions: ContentItem;

  constructor() { }

  ngOnInit() {
  }
}
