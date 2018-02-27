import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PicksService {

  private baseUrl = 'https://football-picks-api.herokuapp.com/api';
  private devUrl = 'http://localhost:3000/api';

  constructor(
    private http: Http
  ) { }

  public getMatchups(seasonId: string): Observable<Response> {
    return this.http.get(`/season/${seasonId}/matchup`).map((res: Response) => {
      return res.json();
    });
  }

}
