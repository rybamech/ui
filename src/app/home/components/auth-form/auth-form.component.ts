import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthFormModel} from './auth-form.model';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  @Input()
  model: AuthFormModel = new AuthFormModel();

  // Это сомнительная штука в ангуляре - в идеале она оповещает родительский компонент о событии и родительский компонент
  // тот, в свою очередь отправляет в данном случае запрос к серверу
  // ATTEMPTION: сабмит отделен от модели, поскольку он не мутирует данные, и не является ее частью
  @Output()
  submit: EventEmitter<AuthFormModel> = new EventEmitter<AuthFormModel>();

  constructor() { }

  ngOnInit() {
  }

  // при нажатии на сабмит прокидываем состояние компонента(модель) к родительскому
  submitForm(): void {
    this.submit.emit(this.model);
  }

}
