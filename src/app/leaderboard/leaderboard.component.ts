import { Component, OnInit,  ChangeDetectorRef } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { Leaderboard } from '../models/Leaderboard';
import { ScoringService } from '../scoring.service';
import { LeaderboardDatasource } from '../database/leaderboard.datasource';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
  providers: [ScoringService]
})
export class LeaderboardComponent implements OnInit {
  displayedColumns: string[];
  dataSource: LeaderboardDatasource | null;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private scoringService: ScoringService
  ) { }

  ngOnInit() {
    this.dataSource = new LeaderboardDatasource(this.scoringService);
    this.displayedColumns = ['place', 'name', 'score'];
    this.changeDetector.markForCheck();
  }

}
