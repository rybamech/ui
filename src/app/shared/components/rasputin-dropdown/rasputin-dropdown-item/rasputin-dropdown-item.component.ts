import {
  AfterContentInit,
  Component, ComponentFactoryResolver, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewContainerRef
} from '@angular/core';
import {RasputinDropdownInput} from "../rasputin-dropdown.model";
import {ReferenceDirective} from "../../../directives/reference.directive";

@Component({
  selector: 'rasputin-dropdown-item',
  templateUrl: './rasputin-dropdown-item.component.html',
  styleUrls: ['./rasputin-dropdown-item.component.scss']
})
export class RasputinDropdownItemComponent implements OnInit, AfterContentInit, OnChanges {
  @Input()
  item: RasputinDropdownInput.Item = null;

  @Input()
  isHighlightedOnSelect: boolean = true;

  @ViewChild(ReferenceDirective, {read: ViewContainerRef})
  itemContainer: ViewContainerRef;


  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.itemContainer.clear();
    this.loadComponent();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(!Object.is(changes.item.currentValue, changes.item.previousValue)) {
      this.itemContainer.clear();
      this.loadComponent();
    }
  }

  loadComponent(): void {
    if(this.item) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.item.componentReference);
      const componentRef: any = this.itemContainer.createComponent(componentFactory);

      componentRef.instance.data = this.item;
    } else {
      throw Error('You must define dropdown item');
    }
  }

  isColored(): boolean {
    return this.isHighlightedOnSelect && this.item.isSelected;
  }

}
