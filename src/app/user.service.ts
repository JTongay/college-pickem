import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { User } from './models/User';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  createUser(user: User): Observable<boolean> {
    return this.http.post('', user).map((res: Response) => {
      return res.json();
    });
  }

  getUser(id: Number): Observable<User> {
    return this.http.get('').map((res: Response) => {
      return res.json();
    });
  };
}
