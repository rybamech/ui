import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[app-reference]'
})
export class ReferenceDirective {

  constructor(public viewContainerRef: ViewContainerRef) {
  }

}
