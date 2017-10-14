import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdMenuModule, MdInputModule,
         MdToolbarModule, MdDialogModule, MdSidenavModule, MdNativeDateModule, MdFormFieldModule,
         MaterialModule } from '@angular/material';
import 'hammerjs';

import { AuthService } from './auth.service';
import { UserService } from './user.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CollegeComponent } from './college/college.component';
import { NflComponent } from './nfl/nfl.component';
import { FormComponent } from './form/form.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    FooterComponent,
    MainComponent,
    LoginComponent,
    SignupComponent,
    CollegeComponent,
    NflComponent,
    FormComponent,
    LeaderboardComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(routing),
    MdButtonModule, MdCheckboxModule, MdMenuModule, MdInputModule,
    MdToolbarModule, MdDialogModule, MdSidenavModule, MdNativeDateModule,
    MdFormFieldModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
