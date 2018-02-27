import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ISeason, ISeasonData } from './models/Season';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SeasonService {

  private baseUrl = 'https://football-picks-api.herokuapp.com/api';
  private devUrl = 'http://localhost:3000/api';
  private _currentCollegeSeason: ISeason;
  private _currentNflSeason: ISeason;

  constructor(
    private http: Http
  ) { }

  get currentCollegeSeason(): ISeason {
    return this._currentCollegeSeason;
  }

  set currentCollegeSeason(value: ISeason) {
    this._currentCollegeSeason = value;
  }

  get currentNflSeason(): ISeason {
    return this._currentNflSeason;
  }

  set currentNflSeason(value: ISeason) {
    this._currentNflSeason = value;
  }

  public getCurrentCollegeSeason(): any {
    return this.http.get(`${this.devUrl}/season/college`).map((res: Response) => {
      this.currentCollegeSeason = res.json();
      return this.currentCollegeSeason;
    }).subscribe((data: ISeason) => {
      console.log(data);
    });
  }

  public getCurrentNflSeason(): any {
    return this.http.get(`${this.devUrl}/season/nfl`).map((res: Response) => {
      this.currentNflSeason = res.json();
      return this.currentNflSeason;
    }).subscribe((data: ISeason) => {
      console.log(data);
    });
  }

  public createSeason(seasonData: ISeason): Observable<Response> {
    return this.http.post(`${this.devUrl}/season/create`, seasonData).map((res: Response) => {
      return res.json();
    });
  };

  public getSeasons(): Observable<any> {
    return this.http.get(`${this.devUrl}/season`).map((res: any) => {
      return res.json().response;
    });
  };

  public activateSeason(seasonId: number): Observable<Response> {
    const requestBody = {
      id: seasonId
    };
    return this.http.put(`${this.devUrl}/season/activate`, requestBody).map((res: Response) => {
      return res.json();
    });
  }
  public deactivateSeason(seasonId: number): Observable<Response> {
    const requestBody = {
      id: seasonId
    };
    console.log(requestBody);
    return this.http.put(`${this.devUrl}/season/deactivate`, requestBody).map((res: Response) => {
      return res.json();
    });
  }
}
