import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  loading: boolean;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loading = false;
    const userName = new FormControl();
    const password = new FormControl();
    this.loginForm = new FormGroup({
      userName,
      password
    });
  }

  sendLogin (formValues: FormGroup) {
    this.loading = true;
    this.auth.login(formValues.value).subscribe((res) => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['']);
      this.loading = false;
    }, (err) => {
      this.loading = false;
      console.log(err, 'error');
    });
  }

}
