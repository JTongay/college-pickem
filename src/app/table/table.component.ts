import { Component, Input } from '@angular/core';
import { LeaderboardDatasource } from '../database/leaderboard.datasource'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent {

  @Input() displayedColumns: string[];
  @Input() dataSource: LeaderboardDatasource;

  constructor( ) { }

}
