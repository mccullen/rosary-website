import { Component, OnInit } from '@angular/core';
import { myId } from '../a-link/a-link.component';

@Component({
  selector: 'app-b-body',
  templateUrl: './b-body.component.html',
  styleUrls: ['./b-body.component.css']
})
export class BBodyComponent implements OnInit {
  bodyId: string = myId;
  constructor() { }

  ngOnInit() {
  }

}
