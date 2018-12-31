import { Component } from '@angular/core';
import { App } from '../app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent {
  mysterySeries: string;
  mysteryLink: string;
  day: number;

  constructor(private app: App) {
    this.day = new Date().getDay();
    if (this.joyfulMysteriesDay()) {
      this.mysterySeries = "Joyful Mysteries";
      this.mysteryLink = "http://www.vatican.va/special/rosary/documents/misteri_gaudiosi_en.html";
    } else if (this.luminousMysteriesDay()) {
      this.mysterySeries = "Mysteries of Light";
      this.mysteryLink = "http://www.vatican.va/special/rosary/documents/misteri_luminosi_en.html";
    } else if (this.sorrowfulMysteriesDay()) {
      this.mysterySeries = "Sorrowful Mysteries";
      this.mysteryLink = "http://www.vatican.va/special/rosary/documents/misteri_dolorosi_en.html";
    } else if (this.gloriousMysteriesDay()) {
      this.mysterySeries = "Glorious Mysteries";
      this.mysteryLink = "http://www.vatican.va/special/rosary/documents/misteri_gloriosi_en.html";
    }
  }

  joyfulMysteriesDay() {
    // Mondays and Saturdays
    return this.day === 1 || this.day === 6;
  }

  luminousMysteriesDay() {
    // Thursdays
    return this.day === 4;
  }

  sorrowfulMysteriesDay() {
    // Tuesdays and Fridays
    return this.day === 2 || this.day === 5;
  }

  gloriousMysteriesDay() {
    // Wednesdays and Sundays
    return this.day === 3 || this.day === 0;
  }
}
