import { Component, OnInit, ViewChild, Input, ComponentFactoryResolver, ComponentFactory, ViewContainerRef, ElementRef } from '@angular/core';
import { TemplateDirective } from '../template.directive';
import { ContentItem } from '../content-item';

@Component({
  selector: 'app-table-of-contents',
  templateUrl: './table-of-contents.component.html',
  styleUrls: ['./table-of-contents.component.css']
})
export class TableOfContentsComponent implements OnInit {

  @ViewChild("toc") toc: TemplateDirective;
  @ViewChild("bodys") bodys: TemplateDirective;
  @ViewChild("toc-ul") tocUl: HTMLUListElement;
  @Input() contentItems: ContentItem[];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.createLinks();
    this.createContents();
  }

  private createLinks() {
    for (let contentItem of this.contentItems) {
      this.createLink(contentItem);
    }
  }

  private createLink(contentItem: ContentItem) {
    let linkComponentFactory =
      this.componentFactoryResolver.resolveComponentFactory(contentItem.linkComponent);
    let linkViewContainerRef = this.toc.viewContainerRef;
    this.createComponents(contentItem, linkComponentFactory, linkViewContainerRef);
  }

  private createContents() {
    for (let contentItem of this.contentItems) {
      this.createContent(contentItem);
    }
  }

  private createContent(contentItem: ContentItem) {
    let contentComponentFactory =
      this.componentFactoryResolver.resolveComponentFactory(contentItem.bodyComponent);
    let contentViewContainerRef = this.bodys.viewContainerRef;
    this.createComponents(contentItem, contentComponentFactory, contentViewContainerRef);
  }

  private ul: HTMLUListElement;

  private createComponents(
      contentItem: ContentItem,
      componentFactory: ComponentFactory<any>,
      viewContainerRef: ViewContainerRef) {
    let componentRef = viewContainerRef.createComponent(componentFactory);
    let element: ElementRef = viewContainerRef.element;
    //for (let child of contentItem.children) {
    for (let iChild = 0; iChild < contentItem.children.length; ++iChild) {
      let child = contentItem[iChild];
      if (iChild === 0 && element.nativeElement.parentElement instanceof HTMLUListElement) {
      } else {
      }
      this.createComponents(child, componentFactory, viewContainerRef);
    }
  }
}
