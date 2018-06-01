import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PicksService {

  private baseUrl = 'https://football-picks-api.herokuapp.com/api';
  private devUrl = 'http://localhost:3000/api';

  constructor(
    private httpClient: HttpClient
  ) { }

  // public getMatchups(seasonId: string): Observable<Response> {
  //   return this.httpClient.get(`${this.devUrl}/season/${seasonId}/matchup`).map((res: Response) => {
  //     return res.json();
  //   });
  // }

  public getMatchups<T>(seasonId: string): Observable<T> {
    return this.httpClient.get<T>(`${this.devUrl}/season/${seasonId}/matchup`);
  }

}
