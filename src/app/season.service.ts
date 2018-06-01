import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ISeason, ISeasonData } from './models/Season';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SeasonService {

  private readonly baseUrl = 'https://football-picks-api.herokuapp.com/api';
  private readonly devUrl = 'http://localhost:3000/api';
  private _currentCollegeSeason: ISeason;
  private _currentNflSeason: ISeason;

  constructor(
    private httpClient: HttpClient
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

  // public getCurrentCollegeSeason(): Observable<ISeason> {
  //   return this.httpClient.get(`${this.devUrl}/season/college`).map((res: Response) => {
  //     this.currentCollegeSeason = res.json();
  //     return this.currentCollegeSeason;
  //   });
  // }
  public getCurrentCollegeSeason(): Observable<ISeason> {
    return this.httpClient.get(`${this.devUrl}/season/college`);
  }

  public getCurrentNflSeason(): Observable<ISeason> {
    return this.httpClient.get(`${this.devUrl}/season/nfl`);
  }

  public createSeason(seasonData: ISeason): Observable<any> {
    return this.httpClient.post(`${this.devUrl}/season/create`, seasonData);
  };

  public getSeasons(): Observable<any> {
    return this.httpClient.get(`${this.devUrl}/season`);
  };

  public activateSeason(seasonId: number): Observable<any> {
    const requestBody = {
      id: seasonId
    };
    return this.httpClient.put(`${this.devUrl}/season/activate`, requestBody);
  }
  public deactivateSeason(seasonId: number): Observable<any> {
    const requestBody = {
      id: seasonId
    };
    console.log(requestBody);
    return this.httpClient.put(`${this.devUrl}/season/deactivate`, requestBody);
  }
}
