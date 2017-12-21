import { Component, Input } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { DialogWrapperComponent } from '../dialog-wrapper/dialog-wrapper.component';
import { ISeason } from '../models/Season';
import { SeasonService } from '../season.service';

@Component({
  selector: 'app-season-list',
  templateUrl: './season-list.component.html',
  styleUrls: ['./season-list.component.scss']
})
export class SeasonListComponent {

  @Input() seasonList: ISeason;

  constructor(
    private dialog: MdDialog,
    private seasonService: SeasonService
  ) { }
  deactivateSeason(seasonId: number): void {
    console.log('deactivate');
    const dialogRef = this.dialog.open(DialogWrapperComponent, {
      width: '250px'
    });

    // deactivate the season
    this.seasonService.deactivateSeason(seasonId).subscribe(() => {});

    dialogRef.afterClosed().subscribe((res) => {
      console.log('called after closed');
      this.seasonService.getSeasons().subscribe((data) => {
        this.seasonList = data.response;
      });
    });
  }

  activateSeason(seasonId: number): void {
    console.log('deactivate');
    const dialogRef = this.dialog.open(DialogWrapperComponent, {
      width: '250px'
    });

    // activate the season
    this.seasonService.activateSeason(seasonId).subscribe(() => {});

    dialogRef.afterClosed().subscribe((res) => {
      console.log('called after closed');
      this.seasonService.getSeasons().subscribe((data) => {
        this.seasonList = data.response;
      });
    });
  };

}
