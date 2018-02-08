import { Component, Input, ChangeDetectorRef, OnInit } from '@angular/core';
import { LeaderboardDatasource } from '../database/leaderboard.datasource'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  @Input() displayedColumns: string[];
  @Input() dataSource: LeaderboardDatasource;

  constructor(
    private changeDetector: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.changeDetector.detectChanges();
  }

}
