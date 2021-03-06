import { Leaderboard } from '../models/Leaderboard';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {DataSource} from '@angular/cdk/table';
import {Injectable} from '@angular/core';
import { ScoringService } from '../scoring.service';

const dummy = [
  {position: 1, name: 'Hydrogen', weight: 5, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 6, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40, symbol: 'Ca'},
];

@Injectable()
export class LeaderboardDatabase {
    leaderboards: Leaderboard[];
    dataChange: BehaviorSubject<Leaderboard[]> = new BehaviorSubject<Leaderboard[]>([]);
    get data(): Leaderboard[] { return this.dataChange.value; };

    constructor(
      private scoringService: ScoringService
    ) {
      // scoringService.getLeaderBoard(1, 1).subscribe(data => this.dataChange.next(data));
    }
}

/* When you come back to this and need to do this with data returned from a service,
inject the service then do the call in the constructor, subscribe to it, then call this.dataChange.next(data)
with the returned data from the subscription.

https://stackoverflow.com/questions/45014257/how-to-use-md-table-with-services-in-angular-4
*/
// NOT USED
