import { Component } from '@angular/core';
import { OriginAndNameComponent } from '../origin-and-name/origin-and-name.component';
import { PrayWorthilyComponent } from '../pray-worthily/pray-worthily.component';
import { PrayersComponent } from '../prayers/prayers.component';
import { MeditationsComponent } from '../meditations/meditations.component';
import { WondersComponent } from '../wonders/wonders.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { LearnMoreComponent } from '../learn-more/learn-more.component';
import { QuotesComponent } from '../quotes/quotes.component';
import { DedicationComponent } from '../dedication/dedication.component';
import { PatronsComponent } from '../patrons/patrons.component';
import { faChevronRight, faChevronDown, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ContentsComponent } from '../contents/contents.component';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  isRosaryCatechismCollapsed = true;
  faChevron: IconDefinition = faChevronRight;
  originAndNamePath = OriginAndNameComponent.originAndNamePath;
  prayWorthilyPath = PrayWorthilyComponent.prayWorthilyPath;
  prayersPath = PrayersComponent.prayersPath;
  meditationsPath = MeditationsComponent.meditationsPath;
  wondersPath = WondersComponent.wondersPath;
  aboutPath = AboutComponent.aboutPath;
  contactPath = ContactComponent.contactPath;
  learnMorePath = LearnMoreComponent.learnMorePath;
  quotesPath = QuotesComponent.quotesPath;
  dedicationPath = DedicationComponent.dedicationPath;
  patronsPath = PatronsComponent.patronsPath;
  contentsPath = ContentsComponent.contentsPath;

  constructor() {
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  toggleRosaryCatechism() {
    this.isRosaryCatechismCollapsed = !this.isRosaryCatechismCollapsed;
    if (this.faChevron === faChevronRight) {
      this.faChevron = faChevronDown;
    } else {
      this.faChevron = faChevronRight;
    }
  }
}
