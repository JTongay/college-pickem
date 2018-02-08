import { Component, Input, ChangeDetectorRef, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { DialogWrapperComponent } from '../dialog-wrapper/dialog-wrapper.component';
import { ISeason, ISeasonData } from '../models/Season';
import { SeasonService } from '../season.service';
import { SeasonDatasource } from '../database/seasons.datasource';
import { DataSource } from '@angular/cdk/table';


@Component({
  selector: 'app-season-list',
  templateUrl: './season-list.component.html',
  styleUrls: ['./season-list.component.scss'],
  providers: [SeasonService]

})
export class SeasonListComponent implements OnInit {

  @Input() seasonList: ISeason;
  private dataSource: SeasonDatasource | null;
  private displayedColumns: string[];

  constructor(
    private dialog: MdDialog,
    private seasonService: SeasonService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.dataSource = new SeasonDatasource(this.seasonService);
    this.displayedColumns = ['League', 'Start Date', 'End Date', 'Active Season', 'Activate/Deactivate'];
    this.changeDetector.markForCheck();
  }

  deactivateSeason(seasonId: number): void {
    console.log('deactivate');
    const dialogRef = this.dialog.open(DialogWrapperComponent, {
      width: '250px',
      data: { activated: false }
    });

    // deactivate the season
    this.seasonService.deactivateSeason(seasonId).subscribe(() => {});

    dialogRef.afterClosed().subscribe((res) => {
      console.log('called after closed');
      this.seasonService.getSeasons().subscribe((data) => {
        this.seasonList = data;
      });
    });
  }

  activateSeason(seasonId: number): void {
    console.log('deactivate');
    const dialogRef = this.dialog.open(DialogWrapperComponent, {
      width: '250px',
      data: { activated: true }
    });

    // activate the season
    this.seasonService.activateSeason(seasonId).subscribe(() => {});

    dialogRef.afterClosed().subscribe((res) => {
      console.log('called after closed');
      this.seasonService.getSeasons().subscribe((data) => {
        this.seasonList = data;
      });
    });
  };

}
