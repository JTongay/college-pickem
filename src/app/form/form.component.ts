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

  signupForm: FormGroup;

  constructor(
    private auth: AuthService,
    private user: UserService
  ) { }

  ngOnInit() {
    this.firstName = new FormControl('');
    this.lastName = new FormControl('');
    this.userName = new FormControl('');
    this.password = new FormControl('');
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.signupForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      userName: this.userName,
      password: this.password,
      email: this.email
    });
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter your email' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  sendSignup(formData: FormGroup) {
    console.log(formData);
  }

}
