import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    const firstName = new FormControl();
    const lastName = new FormControl();
    const userName = new FormControl();
    const password = new FormControl();
    const email = new FormControl();
    this.signupForm = new FormGroup({
      firstName,
      lastName,
      userName,
      password,
      email
    });
  }

  sendSignup(){

  }

}
