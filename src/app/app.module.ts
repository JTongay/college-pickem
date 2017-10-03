import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { angularMaterialModule } from './modules/material.module'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './routes'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CollegeComponent } from './college/college.component';
import { NflComponent } from './nfl/nfl.component';

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
    NflComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    angularMaterialModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
