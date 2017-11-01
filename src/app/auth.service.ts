import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { User } from './models/User';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  public token: string;

  constructor(
    private http: Http,
    private router: Router
  ) {
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(user: User): Observable<boolean> {
    return this.http.post('', user).map((res: Response) => {
      const token = res.json() && res.json().token;
      if (token) {
        // set that token property
        this.token = token;

        // set token in local storage
        localStorage.setItem('currentUser', JSON.stringify({token}));

        // return the response to indicate successful login
        return res.json();
      } else {
        // return the response without setting a token and display error message
        return res.json();
      }
    });
  };

  logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');
  };

  isLoggedIn(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}
