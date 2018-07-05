import {RasputinInputModel} from '../../../shared/components/rasputin-input/rasputin-input.model';
import {RasputinDropdownInput} from '../../../shared/components/rasputin-dropdown/rasputin-dropdown.model';
import {RasputinCheckboxModel} from "../../../shared/components/rasputin-checkbox/rasputin-checkbox.model";

interface RegistrationFormConstructor {
  login?: RasputinInputModel;
  password?: RasputinInputModel;
  confirmPassword?: RasputinInputModel;
  email?: RasputinInputModel;
  role?: RasputinDropdownInput.Model;
  fullName?: RasputinInputModel;
  address?: RasputinInputModel;
  country?: RasputinInputModel;
  region?: RasputinInputModel;
  city?: RasputinInputModel;
  postalCode?: RasputinInputModel;
  phone?: RasputinInputModel;
  identityNumber?: RasputinInputModel;
  messengerType?: RasputinDropdownInput.Model;
  messengerId?: RasputinInputModel;
  website?: RasputinInputModel;
  bongaCache?: RasputinInputModel;
  checkbox1?: RasputinCheckboxModel;
  checkbox2?: RasputinCheckboxModel;
}

// для класса компонента, где будет происходить работа с данными,
// по-хорошему будет класс модели, который можно прокидывать в компонент через аннотацию @Model()
export class RegistrationFormModel {

  login: RasputinInputModel = new RasputinInputModel(
    {
      value: '',
    }
  );

  password: RasputinInputModel = new RasputinInputModel();

  confirmPassword: RasputinInputModel = new RasputinInputModel();

  email: RasputinInputModel = new RasputinInputModel();

  role: RasputinDropdownInput.Model = new RasputinDropdownInput.Model({
    selectedItem: new RasputinDropdownInput.TextItem(
      'Individual',
      1
    ),
    items: [
      new RasputinDropdownInput.TextItem(
        'Individual',
        1
      ),
      new RasputinDropdownInput.TextItem(
        'Company',
        2
      )
    ],
    sideEffect: () => {

    }
  });

  fullName: RasputinInputModel = new RasputinInputModel();

  companyName: RasputinInputModel = new RasputinInputModel();

  address: RasputinInputModel = new RasputinInputModel();

  country: RasputinInputModel = new RasputinInputModel();

  region: RasputinInputModel = new RasputinInputModel();

  city: RasputinInputModel = new RasputinInputModel();

  postalCode: RasputinInputModel = new RasputinInputModel();

  phone: RasputinInputModel = new RasputinInputModel();

  identityNumber: RasputinInputModel = new RasputinInputModel();

  messengerType: RasputinDropdownInput.Model = new RasputinDropdownInput.Model({
    selectedItem: new RasputinDropdownInput.ImageTextItem(
      'Telegram',
      1,
      './../../assets/images/icons/telegram.svg'
    ),
    items: [
      new RasputinDropdownInput.ImageTextItem(
        'Telegram',
        1,
        './../../assets/images/icons/telegram.svg'
      ),
      new RasputinDropdownInput.ImageTextItem(
        'Whatsapp',
        2,
        './../../assets/images/icons/whatsapp.svg'
      ),
      new RasputinDropdownInput.ImageTextItem(
        'Viber',
        3,
        './../../assets/images/icons/viber.svg'
      ),
      new RasputinDropdownInput.ImageTextItem(
        'VK',
        4,
        './../../assets/images/icons/vk.svg'
      )
    ]
  });

  messengerId: RasputinInputModel = new RasputinInputModel();

  website: RasputinInputModel = new RasputinInputModel();

  bongaCache: RasputinInputModel = new RasputinInputModel();

  checkbox1: RasputinCheckboxModel = new RasputinCheckboxModel();

  checkbox2: RasputinCheckboxModel = new RasputinCheckboxModel();

  constructor(data?: RegistrationFormConstructor) {
    if (data) {
      for (const key in data) {
        if (data.hasOwnProperty(key) && this.hasOwnProperty(key)) {
          this[key] = data[key];
        }
      }
    }
  }

}
