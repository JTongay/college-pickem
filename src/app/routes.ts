import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NflComponent } from './nfl/nfl.component';
import { CollegeComponent } from './college/college.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { CollegePickComponent } from './college-pick/college-pick.component';
import { NflPickComponent } from './nfl-pick/nfl-pick.component';
import { SeasonComponent } from './season/season.component';
import { GameLandingComponent } from './game-landing/game-landing.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'picks',
    component: GameLandingComponent
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
    path: 'nfl/pick',
    component: NflPickComponent
  },
  {
    path: 'college/pick',
    component: CollegePickComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'leaderboard',
    component: LeaderboardComponent
  },
  {
    path: 'season',
    component: SeasonComponent
  }
];

export const routing = APP_ROUTES;
