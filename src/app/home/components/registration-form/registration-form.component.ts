import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RegistrationFormModel} from './registration-form.model';
import {NgForm} from '@angular/forms';
import {RasputinInputModel} from '../../../shared/components/rasputin-input/rasputin-input.model';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  @Input()
  model: RegistrationFormModel = new RegistrationFormModel();

  // Это сомнительная штука в ангуляре - в идеале она оповещает родительский компонент о событии и родительский компонент
  // тот, в свою очередь отправляет в данном случае запрос к серверу
  // ATTEMPTION: сабмит отделен от модели, поскольку он не мутирует данные, и не является ее частью
  @Output()
  submit: EventEmitter<RegistrationFormModel> = new EventEmitter<RegistrationFormModel>();

  constructor() {
  }

  ngOnInit() {
  }

  // при нажатии на сабмит оповещаем родительский компонент о сабмите
  submitForm(): void {
    this.submit.emit();
  }

  isUserIndividual(): boolean {
    return this.model.role.selectedItem.id === 1;
  }

  isUserCompany(): boolean {
    return this.model.role.selectedItem.id === 2;
  }

}
