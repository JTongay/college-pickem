import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NflComponent } from './nfl/nfl.component';
import { CollegeComponent } from './college/college.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'nfl',
    component: NflComponent
  },
  {
    path: 'college',
    component: CollegeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
