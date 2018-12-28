import { Component } from '@angular/core';
import { App } from '../app'

@Component({
  selector: 'origin-and-name',
  templateUrl: './origin-and-name.component.html'
})
export class OriginAndNameComponent {
  static originAndNamePath: string = "origin-and-name";

  constructor(private app: App) { }

  get originAndNamePath() {
    return OriginAndNameComponent.originAndNamePath;
  }
}
