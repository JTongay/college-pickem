import { DataSource } from '@angular/cdk/table';
import { LeaderboardDatabase } from './leaderboard';
import { Leaderboard } from '../models/Leaderboard';
import { Observable } from 'rxjs/Observable';
import {logging} from 'selenium-webdriver';
import {ScoringService} from '../scoring.service';

export class LeaderboardDatasource extends DataSource<any> {

  baseUrl = 'https://football-picks-api.herokuapp.com/api';
  devUrl = 'http://localhost:3000/api';

  constructor(
    private scoringService: ScoringService
  ) {
    super();
    this.baseUrl = 'https://football-picks-api.herokuapp.com/api';
    this.devUrl = 'http://localhost:3000/api';
  }


  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<any> {
    console.log('connected?');
    return this.scoringService.getLeaderBoard(1, 1);
  }
  disconnect() {}
}
