import {Component} from '@angular/core';
import {UserService} from './home/services/user.service';
import {HomePageModel} from './home/home-page/home-page.model';
import {RasputinInputModel} from './shared/components/rasputin-input/rasputin-input.model';
import {RegistrationFormModel} from './home/components/registration-form/registration-form.model';
import {AuthFormModel} from './home/components/auth-form/auth-form.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
