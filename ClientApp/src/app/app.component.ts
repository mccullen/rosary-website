import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  topBtn: any = {
    id: "scroll-btn",
    text: "Top",
    scrollTopPx: 20
  };

  constructor(public app: AppService) {
  }

  ngOnInit() {
    this.addOnScrollListener();
  }

  private addOnScrollListener() {
    let that = this;
    window.onscroll = function () {
      let topBtn = that.topBtn;
      if (document.body.scrollTop > topBtn.scrollTopPx ||
          document.documentElement.scrollTop > topBtn.scrollTopPx) {
        document.getElementById(topBtn.id).style.display = "block";
      } else {
        document.getElementById(topBtn.id).style.display = "none";
      }
    };
  }

  onTopBtnClick(event: any) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
