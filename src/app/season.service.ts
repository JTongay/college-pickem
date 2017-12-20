import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ISeason } from './models/Season';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SeasonService {

  private baseUrl = 'https://football-picks-api.herokuapp.com/api';
  private devUrl = 'http://localhost:3000/api';

  constructor(
    private http: Http
  ) { }

  createSeason(seasonData: ISeason): Observable<any> {
    return this.http.post(`${this.devUrl}/season/create`, seasonData).map((res: Response) => {
      return res.json();
    });
  }

  getSeasons(): Observable<any> {
    return this.http.get(`${this.devUrl}/season`).map((res: Response) => {
      return res.json();
    });
  }
}
