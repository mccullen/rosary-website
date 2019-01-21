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
//declare var $: any;
//import * as $ from 'jquery';

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
  aboutPath = AboutComponent.aboutPath;
  contactPath = ContactComponent.contactPath;
  learnMorePath = LearnMoreComponent.learnMorePath;
  quotesPath = QuotesComponent.quotesPath;
  dedicationPath = DedicationComponent.dedicationPath;
  patronsPath = PatronsComponent.patronsPath;

  constructor() {
    /*
    $(function () {
      debugger;
      $("a").on("click", function () { console.log("HERE"); });
    });
    $(document).ready(function () {
      $(".dropdown-toggle").dropdown();
    });
    */
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
