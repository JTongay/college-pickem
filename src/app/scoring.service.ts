import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ScoringService {

  baseUrl = 'https://football-picks-api.herokuapp.com/api';
  devUrl = 'http://localhost:3000/api';

  constructor(
    private http: Http
  ) { }

  getLeaderBoard(seasonId: number, week: number): Observable<any> {
    return this.http.get(`${this.devUrl}/season/${seasonId}/score/${week}/leaderboard`)
      .map((res: Response) => {
        console.log(res.json())
        return res.json();
      });
  }

  private handleError(res: Response) {
    return Observable.throw('Error Fam');
  }

}
