import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { User } from './models/User';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  public token: string;
  private baseUrl = 'https://football-picks-api.herokuapp.com/api';
  private devUrl = 'http://localhost:3000/api';

  constructor(
    private http: Http,
    private router: Router
  ) {
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(user: User): Observable<any> {
    // const headers: Headers = new Headers({'Content-Type': 'application/json'});
    // const options: RequestOptions = new RequestOptions({ headers });
    const userPayload = {
      username: user.userName,
      password: user.password
    };

    return this.http.post(`${this.devUrl}/session/login`, userPayload).map((res: Response) => {
      return res.json();
    });
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
