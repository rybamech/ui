import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RasputinInputModel} from './rasputin-input.model';
import {RasputinCheckboxModel} from '../rasputin-checkbox/rasputin-checkbox.model';

@Component({
  selector: 'rasputin-input',
  templateUrl: './rasputin-input.component.html',
  styleUrls: ['./rasputin-input.component.scss']
})
export class RasputinInputComponent implements OnInit {
  @Input()
  model: RasputinInputModel = new RasputinInputModel(
    {
      value: '',
      title: ''
    }
  );

  constructor() {
  }

  ngOnInit() {
  }

  change(inputData: HTMLInputElement) {
    if (typeof inputData.value === 'string' && (this.model instanceof RasputinInputModel)) {
      this.model.changeModel(inputData.value);
    } else {
      throw Error(
        `Expected model as RasputinInputModel, but got: ${this.model ? this.model['constructor'].name : this.model}`
      );
    }
  }

}
