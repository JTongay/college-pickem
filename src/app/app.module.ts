import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { MdButtonModule, MdCheckboxModule, MdMenuModule, MdInputModule,
         MdToolbarModule, MdDialogModule, MdSidenavModule, MdNativeDateModule, MdFormFieldModule, MdTableModule,
         MaterialModule } from '@angular/material';

import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { ToastrService } from './toastr.service';
import { SeasonService } from './season.service';

import { dateValidator } from './validators/date';

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
import { TableComponent } from './table/table.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CollegePickComponent } from './college-pick/college-pick.component';
import { NflPickComponent } from './nfl-pick/nfl-pick.component';
import { SeasonComponent } from './season/season.component';
import { SeasonFormComponent } from './season-form/season-form.component';
import { SeasonListComponent } from './season-list/season-list.component';

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
    LeaderboardComponent,
    TableComponent,
    LoginFormComponent,
    CollegePickComponent,
    NflPickComponent,
    SeasonComponent,
    SeasonFormComponent,
    SeasonListComponent
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
  providers: [AuthService, UserService, ToastrService, dateValidator, SeasonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
