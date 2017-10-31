import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs/Rx';

import { UserService } from '../user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  firstName: FormControl;
  lastName: FormControl;
  userName: FormControl;
  password: FormControl;
  email: FormControl;
  loading: Boolean;

  signupForm: FormGroup;

  constructor(
    private auth: AuthService,
    private user: UserService
  ) { }

  ngOnInit() {
    this.loading = false;
    this.firstName = new FormControl('', [Validators.required]);
    this.lastName = new FormControl('', [Validators.required]);
    this.userName = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required]);
    this.signupForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      userName: this.userName,
      password: this.password,
      email: this.email
    });
  }

  private getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter your email' : '';
  }

  private getFirstNameErrorMessage() {
    return this.firstName.hasError('required') ? 'You must enter your first name' : '';
  }

  private getLastNameErrorMessage() {
    return this.lastName.hasError('required') ? 'You must enter your last name' : '';
  }

  private getUserNameErrorMessage() {
    return this.userName.hasError('required') ? 'You must enter a username' : '';
  }

  private getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a password' : '';
  }

  sendSignup(formData: FormGroup) {
    this.loading = true;
    console.log(formData);
    if (!formData.valid) {
      this.loading = false;
    }
  }

}
