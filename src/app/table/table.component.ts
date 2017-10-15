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
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  dataSource: LeaderboardDatasource | null;
  displayedColumns: string[];
  exampleDatabase = new LeaderboardDatabase();

  constructor(private changeDetector: ChangeDetectorRef) {
    // this.changeDetector.detectChanges();
  }

  ngOnInit() {
    console.log(this.exampleDatabase);
    this.dataSource = new LeaderboardDatasource(this.exampleDatabase);
    this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
    this.changeDetector.detectChanges();
  }

}
