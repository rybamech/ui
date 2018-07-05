import {RasputinInputModel} from '../../../shared/components/rasputin-input/rasputin-input.model';
import {RasputinCheckboxModel} from '../../../shared/components/rasputin-checkbox/rasputin-checkbox.model';

interface AuthFormConstructor {
  login?: RasputinInputModel;
  password?: RasputinInputModel;
  isSaveSession?: RasputinCheckboxModel;
}

// для класса компонента, где будет происходить работа с данными,
// по-хорошему будет класс модели, который можно прокидывать в компонент через аннотацию @Model()
export class AuthFormModel {
  login: RasputinInputModel = new RasputinInputModel(
    {
      value: '',
    }
  );

  password: RasputinInputModel = new RasputinInputModel(
    {
      value: '',
      type: 'password'
    }
  );

  isSaveSession: RasputinCheckboxModel = new RasputinCheckboxModel();

  constructor(data?: AuthFormConstructor) {
    if (data) {
      for (const key in data) {
        if (data.hasOwnProperty(key) && this.hasOwnProperty(key)) {
          this[key] = data[key];
        }
      }
    }
  }
}
