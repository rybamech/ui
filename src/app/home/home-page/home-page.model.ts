import {RegistrationFormModel} from '../components/registration-form/registration-form.model';
import {AuthFormModel} from '../components/auth-form/auth-form.model';

export class HomePageModel {
  registrationForm: RegistrationFormModel = new RegistrationFormModel();

  authForm: AuthFormModel = new AuthFormModel();

  constructor(data?: {registrationForm?: RegistrationFormModel, authForm?: AuthFormModel}) {
    this.registrationForm = data.registrationForm;
    this.authForm = data.authForm;
  }
}
