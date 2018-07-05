import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UuidService} from '../../services/uuid.service';
import {RasputinCheckboxModel} from './rasputin-checkbox.model';

@Component({
  selector: 'rasputin-checkbox',
  templateUrl: './rasputin-checkbox.component.html',
  styleUrls: ['./rasputin-checkbox.component.scss']
})
export class RasputinCheckboxComponent implements OnInit {
  @Input()
  model: RasputinCheckboxModel = new RasputinCheckboxModel();

  // Уникальный id необходим для того, чтобы подставлять label вместо обычного инпута с сохранением логики инпута
  id: string = this.uuidService.createKey();

  constructor(private uuidService: UuidService) {
  }

  ngOnInit() {
    console.log(this.model);
  }

  // методы, отвечающие за мутации должны быть максимально надежными: не должно быть сценария, в котором метод не делает
  // то, что нам нужно и не возвращает при этом ошибки
  change(): void {
    if (this.model instanceof RasputinCheckboxModel) {
      const newValue = !this.model.value;
      this.model.changeModel(newValue);
    } else {
      throw Error(
        `Expected model as RasputinCheckModel, but got: ${this.model ? this.model['constructor'].name : this.model}`
      );
    }
  }
}
