import { DataSource } from '@angular/cdk/table';
import { LeaderboardDatabase } from './leaderboard';
import { Leaderboard } from '../models/Leaderboard';
import { Observable } from 'rxjs/Observable';
import {logging} from 'selenium-webdriver';
import {ScoringService} from '../scoring.service';

export class LeaderboardDatasource extends DataSource<any> {

  constructor(
    private scoringService: ScoringService
  ) {
    super();
  }


  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<any> {
    return this.scoringService.getLeaderBoard(1, 1);
  }
  disconnect() {}
}
