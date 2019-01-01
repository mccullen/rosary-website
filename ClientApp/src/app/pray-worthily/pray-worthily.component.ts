import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'pray-worthily',
  templateUrl: './pray-worthily.component.html'
})
export class PrayWorthilyComponent {
  static prayWorthilyPath: string = "pray-worthily";
  joyfulMysteriesPath: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.joyfulMysteriesPath = baseUrl + 'api/PrayWorthily/GetJoyfulMysteriesHandout';
    http.get(this.joyfulMysteriesPath).subscribe(result => {
      console.log("Successfully downloaded joyful mysteries");
      console.log(result);
    }, error => console.error(error));
  }
}
