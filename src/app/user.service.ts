import { Injectable } from '@angular/core';
// import { Http, Headers, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { User } from './models/User';
import { Auth } from './models/Auth';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  private readonly baseUrl = 'https://football-picks-api.herokuapp.com/api';
  private readonly devUrl = 'http://localhost:3000/api';

  constructor(
    private httpClient: HttpClient
  ) { }

  public createUser(user: User): Observable<Auth> {
    return this.httpClient.post<Auth>(`${this.devUrl}/users/new`, user);
  }

  public getUser(id: Number): Observable<Auth> {
    return this.httpClient.get<Auth>(`${this.devUrl}/users/${id}`);
  };
}
