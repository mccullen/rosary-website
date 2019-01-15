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
import { PurityOfIntentionComponent } from './prayers/purity-of-intention/purity-of-intention.component';
import { SayAdvantageouslyComponent } from './pray-worthily/purity-of-intention/say-advantageously/say-advantageously.component';

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
    PurityOfIntentionComponent,
    SayAdvantageouslyComponent
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
  bootstrap: [AppComponent]
})
export class AppModule { }
