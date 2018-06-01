import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ScoringService {

  private baseUrl: string = 'https://football-picks-api.herokuapp.com/api';
  private devUrl: string = 'http://localhost:3000/api';

  constructor(
    private httpClient: HttpClient
  ) { }

  // getLeaderBoard(seasonId: number, week: number): Observable<any> {
  //   return this.http.get(`${this.devUrl}/season/${seasonId}/score/${week}/leaderboard`)
  //     .map((res: Response) => {
  //       return res.json();
  //     });
  // }

  public getLeaderBoard<T>(seasonId: number, week: number): Observable<T> {
      return this.httpClient.get<T>(`${this.devUrl}/season/${seasonId}/score/${week}/leaderboard`);
  }
  private handleError(res: Response) {
    return Observable.throw('Error Fam');
  }

}
