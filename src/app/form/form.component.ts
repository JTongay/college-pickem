import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs/Rx';

import { UserService } from '../user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  private firstName: FormControl;
  private lastName: FormControl;
  private userName: FormControl;
  private password: FormControl;
  private email: FormControl;
  private loading: boolean;

  private signupForm: FormGroup;

  constructor(
    private auth: AuthService,
    private user: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
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

  private getEmailErrorMessage(): string {
    return this.email.hasError('required') ? 'You must enter your email' : '';
  }

  private getFirstNameErrorMessage(): string {
    return this.firstName.hasError('required') ? 'You must enter your first name' : '';
  }

  private getLastNameErrorMessage(): string {
    return this.lastName.hasError('required') ? 'You must enter your last name' : '';
  }

  private getUserNameErrorMessage(): string {
    return this.userName.hasError('required') ? 'You must enter a username' : '';
  }

  private getPasswordErrorMessage(): string {
    return this.password.hasError('required') ? 'You must enter a password' : '';
  }

  private sendSignup(formData: FormGroup) {
    this.loading = true;
    console.log(formData);
    if (!formData.valid) {
      this.loading = false;
      return;
    } else {
      return this.user.createUser(formData.value).subscribe(
        (res) => {
          console.log(res);
          this.loading = false;
          window.localStorage.setItem('token', res.token);
          this.router.navigate(['']);
        });
    }
  }

}
