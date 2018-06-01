import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import {Router} from '@angular/router';
import {User} from '../../models/User';

@Injectable()
export class UserServiceMock {
  private _token: string;
  private _loggedIn: boolean;
  private _currentUser: any;

  constructor() {
    // set token if saved in local storage
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = this.currentUser && this.currentUser.token;
    this.loggedIn = false;
  }
  get loggedIn(): boolean {
    return this._loggedIn;
  }

  set loggedIn(value: boolean) {
    this._loggedIn = value;
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }

  get currentUser(): any {
    return this._currentUser;
  }

  set currentUser(value: any) {
    this._currentUser = value;
  }

  login(user: User) {
    return user;
  };

  logout(): void {
    this.token = null;
    localStorage.removeItem('token');
  };

  isLoggedIn(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    }
    // this.router.navigate(['/login']);
    return false;
  }
}
