import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { User } from './models/User';
import { Auth } from './models/Auth';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  baseUrl = 'https://football-picks-api.herokuapp.com/api';
  devUrl = 'http://localhost:3000/api';

  constructor(private http: Http) { }

  createUser(user: User): Observable<Auth> {
    return this.http.post(`${this.devUrl}/users/new`, user).map((res: Response) => {
      return res.json();
    });
  }

  getUser(id: Number): Observable<Auth> {
    return this.http.get(`${this.devUrl}/users/${id}`).map((res: Response) => {
      return res.json();
    });
  };
}
