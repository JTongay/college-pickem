import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { User } from './models/User';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

}
