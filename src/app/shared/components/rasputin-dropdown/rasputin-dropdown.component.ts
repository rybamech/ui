import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {RasputinDropdownInput} from './rasputin-dropdown.model';

@Component({
  selector: 'rasputin-dropdown',
  templateUrl: './rasputin-dropdown.component.html',
  styleUrls: ['./rasputin-dropdown.component.scss']
})
export class RasputinDropdownComponent implements OnInit, AfterViewInit {
  isTipShowed = false;

  @Input()
  model: RasputinDropdownInput.Model = new RasputinDropdownInput.Model(
    {
      selectedItem: null,
      title: '',
      items: [
        new RasputinDropdownInput.TextItem('Empty value', Infinity)
      ]
    }
  );

  constructor() {
  }

  ngOnInit() {
    //Подцветка айтема, при совпадении с выбранным(через глубокое сравнение)
    if (this.model.selectedItem) {
      for(const item of this.model.items) {
        if(Object.is(this.model.selectedItem.id, item.id)) {
          item.isSelected = true;
        }
      }
    }
  }

  ngAfterViewInit() {
  }

  // методы, отвечающие за мутации должны быть максимально надежными: не должно быть сценария, в котором метод не делает
  // то, что нам нужно и не возвращает при этом ошибки
  change(inputData: RasputinDropdownInput.Item): void {
    if (inputData instanceof RasputinDropdownInput.Item) {
      this.model.changeModel(inputData);
    } else {
      throw Error('Argument is not RasputinDropdownInput.Item');
    }
  }

  showTip(): void {
    this.isTipShowed = true;
  }

  hideTip(): void {
    this.isTipShowed = false;
  }

  toggleTupShowed(): void {
    this.isTipShowed = !this.isTipShowed;
  }

}
