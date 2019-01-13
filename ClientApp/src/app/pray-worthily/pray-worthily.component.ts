import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ContentItem } from '../resources/content-item';
import { PrayWorthilyService } from './pray-worthily.service';
import { AppService } from '../app.service';
import { TemplateDirective } from './template.directive';
import { ALinkComponent } from './a-link/a-link.component';
import { ABodyComponent } from './a-body/a-body.component';
import { BLinkComponent } from './b-link/b-link.component';
import { BBodyComponent } from './b-body/b-body.component';

let contentItems: ContentItem[] = [
  {
    id: "a",
    text: "this is text a",
    path: "",
    linkComponent: ALinkComponent,
    bodyComponent: ABodyComponent
  },
  {
    id: "b",
    text: "this is text b",
    path: "",
    linkComponent: BLinkComponent,
    bodyComponent: BBodyComponent
  }
];

@Component({
  selector: 'pray-worthily',
  templateUrl: './pray-worthily.component.html'
})
export class PrayWorthilyComponent implements OnInit {
  static prayWorthilyPath: string = "pray-worthily";

  @ViewChild("toc") toc: TemplateDirective;
  @ViewChild("bodys") bodys: TemplateDirective;

  joyfulMysteriesPath: string;
  contentItems: any;

  avoidDistractions: ContentItem = {
    id: "avoid-distractions",
    text: "How do you avoid distractions?",
    get path() {
      return PrayWorthilyComponent.prayWorthilyPath + "#" + this.id;
    }
  };

  methodsOfPraying: ContentItem = {
    id: "methods-of-praying",
    text: "What methods are there for saying the Rosary?",
    get path() {
      return PrayWorthilyComponent.prayWorthilyPath + "#" + this.id;
    }
  };

  groupRosary: ContentItem = {
    id: "group-rosary",
    text: "How do you pray the Rosary in a Group?",
    get path() {
      return PrayWorthilyComponent.prayWorthilyPath + "#" + this.id;
    }
  };

  handouts: ContentItem = {
    id: "handouts",
    text: "Do you have any handouts for praying the Rosary?",
    get path() {
      return PrayWorthilyComponent.prayWorthilyPath + "#" + this.id;
    }
  };
    prayWorthilyService: PrayWorthilyService;
    appService: AppService;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
      prayWorthilyService: PrayWorthilyService,
      appService: AppService) {
    this.prayWorthilyService = prayWorthilyService;
    this.appService = appService;
    this.joyfulMysteriesPath = prayWorthilyService.joyfulMysteriesPath;
  }

  ngOnInit() {
    for (let contentItem of contentItems) {
      let linkComponentFactory =
        this.componentFactoryResolver.resolveComponentFactory(contentItem.linkComponent);
      let bodyComponentFactory =
        this.componentFactoryResolver.resolveComponentFactory(contentItem.bodyComponent);

      let linkViewContainerRef = this.toc.viewContainerRef;
      let bodyViewContainerRef = this.bodys.viewContainerRef;

      let linkComponentRef = linkViewContainerRef.createComponent(linkComponentFactory);
      let bodyComponentRef = linkViewContainerRef.createComponent(bodyComponentFactory);
    }
  }
}
