import { DataSource } from '@angular/cdk/table';
import { LeaderboardDatabase } from '../database/leaderboard';
import { Leaderboard } from '../models/Leaderboard';
import { Observable } from 'rxjs/Observable';

export class LeaderboardDatasource extends DataSource<any> {
  constructor(private _leaderboardDatabase: LeaderboardDatabase) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Leaderboard[]> {
    console.log('ExampleDataSource#connect')
    return this._leaderboardDatabase.dataChange;
  }
  disconnect() {}
}
