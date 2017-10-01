import { Routes, RouterModule } from "@angular/router";
import { WelcomeComponent } from './welcome/welcome.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: WelcomeComponent
  }
]

export const routing = RouterModule.forRoot(APP_ROUTES)
