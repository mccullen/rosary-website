import { Component } from '@angular/core';
import { OriginAndNameComponent } from '../origin-and-name/origin-and-name.component';
import { PrayWorthilyComponent } from '../pray-worthily/pray-worthily.component';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  originAndNamePath = OriginAndNameComponent.originAndNamePath;
  prayWorthilyPath = PrayWorthilyComponent.prayWorthilyPath;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
