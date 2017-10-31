import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { User } from './models/User';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  baseUrl: String = 'https://football-picks-api.herokuapp.com/api';

  constructor(private http: Http) { }

  createUser(user: User): Observable<User> {
    return this.http.post(`${this.baseUrl}/users/new`, user).map((res: Response) => {
      return res.json();
    });
  }

  getUser(id: Number): Observable<User> {
    return this.http.get(`${this.baseUrl}/users/${id}`).map((res: Response) => {
      return res.json();
    });
  };
}
