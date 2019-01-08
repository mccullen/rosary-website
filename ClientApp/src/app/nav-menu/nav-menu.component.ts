import { Component } from '@angular/core';
import { OriginAndNameComponent } from '../origin-and-name/origin-and-name.component';
import { PrayWorthilyComponent } from '../pray-worthily/pray-worthily.component';
import { PrayersComponent } from '../prayers/prayers.component';
import { MeditationsComponent } from '../meditations/meditations.component';
import { WondersComponent } from '../wonders/wonders.component';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  originAndNamePath = OriginAndNameComponent.originAndNamePath;
  prayWorthilyPath = PrayWorthilyComponent.prayWorthilyPath;
  prayersPath = PrayersComponent.prayersPath;
  meditationsPath = MeditationsComponent.meditationsPath;
  wondersPath = WondersComponent.wondersPath;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
