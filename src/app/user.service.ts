import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { User } from './models/User';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  createUser(user: User): Observable<User> {
    return this.http.post('http://localhost:3000/api/users/new', user).map((res: Response) => {
      return res.json();
    });
  }

  getUser(id: Number): Observable<User> {
    return this.http.get('').map((res: Response) => {
      return res.json();
    });
  };
}
