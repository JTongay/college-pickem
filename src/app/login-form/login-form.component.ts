import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup

  constructor(private auth: AuthService) { }

  ngOnInit() {
    const userName = new FormControl();
    const password = new FormControl();
    this.loginForm = new FormGroup({
      userName,
      password
    })
  }

}
