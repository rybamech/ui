import { Component, OnInit } from '@angular/core';
import {RegistrationFormModel} from "../components/registration-form/registration-form.model";
import {RasputinInputModel} from "../../shared/components/rasputin-input/rasputin-input.model";
import {UserService} from "../services/user.service";
import {AuthFormModel} from "../components/auth-form/auth-form.model";
import {HomePageModel} from "./home-page.model";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
// данные о форме хранятся в верхнеуровневом компоненте. Нужно для того, чтобы эти данные можно было использовать за
  // пределами формы
  // по хорошему всякий компонент, что хранит бизнесовые данные(явки, пароли, номера шлюх), должен иметь модель
  model: HomePageModel = new HomePageModel({
    authForm: new AuthFormModel(),
    registrationForm: new RegistrationFormModel({
      password: new RasputinInputModel(
        {
          value: '',
          type: 'password',
          // в идеале лучше определять сайд-эффекты в файле компонента. Файл модели не должен содержать никакой
          // действий, кроме мутации данных и хранения данных
          sideEffect: function () {
            if (this.value.length < 4) {
              console.log('PASSWORD is incorrect');
            } else {
              console.log('Good password');
            }
          }
        }
      ),
      confirmPassword: new RasputinInputModel(
        {
          value: '',
          type: 'password',
          // в идеале лучше определять сайд-эффекты в файле компонента. Файл модели не должен содержать никакой
          // действий, кроме мутации данных и хранения данных
          sideEffect: () => {
            if (this.model.registrationForm.password.value !== this.model.registrationForm.confirmPassword.value) {
              console.log('PASSWORDS is not equals');
            } else {
              console.log('Your passwords is equals!');
            }
          }
        }
      )
    }),
  });

  isModalShowed = false;

  activeModalForm: 'registration' | 'auth' = 'auth';

  constructor(private userService: UserService) {

  }

  ngOnInit() {

  }

  // если метод возвращает значение, то в этом методе следует избегать изменений состояния программы
  registrationShowed(): boolean {
    return this.activeModalForm === 'registration';
  }

  // если метод возвращает значение, то в этом методе следует избегать изменений состояния программы
  authShowed(): boolean {
    return this.activeModalForm === 'auth';
  }

  hideModal(): void {
    this.isModalShowed = false;
  }

  showModal(): void {
    this.isModalShowed = true;
  }

  showRegistrationForm(): void {
    this.activeModalForm = 'registration';
    this.showModal();
  }

  showAuthForm(): void {
    this.activeModalForm = 'auth';
    this.showModal();
  }

  // очень желательно, чтобы отправку данных на сервер из всех компонентов,
  // в которых есть нужные для сервера данные делала самая верхнеуровневая
  postRegistrationFormData(): void {
    this.userService.postRegistrationForm(this.model.registrationForm)
      .subscribe(
        data => console.log(data),
        err => null);
  }

  // очень желательно, чтобы отправку данных на сервер из всех компонентов, в которых есть нужные
  // для сервера данные делала самая верхнеуровневая
  postAuthFormData(): void {
    // обязательно после отправки запроса нужно добавлять subscribe, иначе ангуляр заблокирует запрос
    this.userService.postAuthForm(this.model.authForm)
      .subscribe(
        data => console.log(data),
        err => null);
  }

}
