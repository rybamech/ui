import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegistrationFormModel} from '../components/registration-form/registration-form.model';
import {Observable} from 'rxjs/Observable';
import {AuthFormModel} from '../components/auth-form/auth-form.model';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  // метод должен вернуть данные, при этом помимо отправления http запросов не рекомендую добавлять побочные эффекты
  postAuthForm(data: AuthFormModel): Observable<Object> {
    return this.http.post('login/', {
      name: data.login.value,
      pass: data.password.value,
      saveMySession: data.isSaveSession.value
    });
  }

  postRegistrationForm(data: RegistrationFormModel): Observable<Object> {
    if(data.role.selectedItem.id === 1) {
      return this.http.post('registration/', {
        login: data.login.value,
        password: data.password.value,
        confirmPassword: data.confirmPassword.value,
        email: data.email.value,
        role: data.role.selectedItem.id,
        fullName: data.fullName.value,
        address: data.address.value,
        country: data.country.value,
        region: data.region.value,
        city: data.city.value,
        postalCode: data.postalCode.value,
        phone: data.phone.value,
        identityNumber: data.identityNumber.value,
        messengerType: data.messengerType.selectedItem.id,
        messengerId: data.messengerId.value,
        website: data.website.value,
        bongaCache: data.bongaCache.value,
        checkbox1: data.checkbox1.value,
        checkbox2: data.checkbox2.value
      });
    } else {
      return this.http.post('registrationCompany/', {
        companyName: data.companyName.value,
      });
    }
  }
}
