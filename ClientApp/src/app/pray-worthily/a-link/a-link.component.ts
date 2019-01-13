import { Component, OnInit } from '@angular/core';

let myId: string = "aa-id";
export { myId };

@Component({
  selector: 'app-a-link',
  templateUrl: './a-link.component.html',
  styleUrls: ['./a-link.component.css']
})
export class ALinkComponent implements OnInit {
  id: string = myId;

  constructor() { }

  ngOnInit() {
  }

}
