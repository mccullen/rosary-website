import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTemplate]',
  exportAs: "myTemplate"
})
export class TemplateDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
