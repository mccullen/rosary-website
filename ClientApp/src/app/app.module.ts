import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { OriginAndNameComponent } from './origin-and-name/origin-and-name.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AppService } from './app.service';
import { PrayWorthilyComponent } from './pray-worthily/pray-worthily.component';
import { PrayWorthilyService } from './pray-worthily/pray-worthily.service';
import { PrayersComponent } from './prayers/prayers.component';
import { MeditationsComponent } from './meditations/meditations.component';
import { WondersComponent } from './wonders/wonders.component';
import { AvoidDistractionsComponent } from './pray-worthily/avoid-distractions/avoid-distractions.component';
import { TemplateDirective } from './resources/template.directive';
import { ALinkComponent } from './pray-worthily/a-link/a-link.component';
import { ABodyComponent } from './pray-worthily/a-body/a-body.component';
import { BBodyComponent } from './pray-worthily/b-body/b-body.component';
import { BLinkComponent } from './pray-worthily/b-link/b-link.component';
import { TableOfContentsComponent } from './resources/table-of-contents/table-of-contents.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    OriginAndNameComponent,
    PrayersComponent,
    PrayWorthilyComponent,
    CounterComponent,
    FetchDataComponent,
    MeditationsComponent,
    WondersComponent,
    AvoidDistractionsComponent,
    TemplateDirective,
    ALinkComponent,
    ABodyComponent,
    BBodyComponent,
    BLinkComponent,
    TableOfContentsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: OriginAndNameComponent.originAndNamePath, component: OriginAndNameComponent },
      { path: PrayersComponent.prayersPath, component: PrayersComponent },
      { path: MeditationsComponent.meditationsPath, component: MeditationsComponent },
      { path: WondersComponent.wondersPath, component: WondersComponent },
      { path: PrayWorthilyComponent.prayWorthilyPath, component: PrayWorthilyComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [
    AppService,
    PrayWorthilyService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ALinkComponent,
    ABodyComponent,
    BLinkComponent,
    BBodyComponent
  ]
})
export class AppModule { }
