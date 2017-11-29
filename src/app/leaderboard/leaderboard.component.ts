import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { LeaderboardDatabase } from '../database/leaderboard';
import { Leaderboard } from '../models/Leaderboard';
import { LeaderboardDatasource } from '../database/leaderboard.datasource'

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
  displayedColumns: string[];
  exampleDatabase = new LeaderboardDatabase();
  dataSource: LeaderboardDatasource | null;

  constructor(
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.dataSource = new LeaderboardDatasource(this.exampleDatabase);
    this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
    this.changeDetector.detectChanges();
  }

}
