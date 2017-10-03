import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NflComponent } from './nfl/nfl.component';
import { CollegeComponent } from './college/college.component';


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
  }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
