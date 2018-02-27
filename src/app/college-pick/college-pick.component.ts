import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validator, FormBuilder, NgModel } from '@angular/forms';

// Interfaces
import { Matchup } from '../models/Matchup';
import { ISeason } from '../models/Season';

// Services
import { PicksService } from '../picks.service';
import { SeasonService } from '../season.service';

// Sample Data
import { matchups } from '../matchups.sample';

@Component({
  selector: 'app-college-pick',
  templateUrl: './college-pick.component.html',
  styleUrls: ['./college-pick.component.scss']
})
export class CollegePickComponent implements OnInit {

  private matchups: any;
  private _currentMatchup: Matchup;
  private _matchupNumber: number = 0;
  private _submitting: boolean;
  private _currentSeason: ISeason;
  public makePick: NgModel;

  constructor(
    private fb: FormBuilder,
    private picksService: PicksService,
    private seasonService: SeasonService
  ) { }

  ngOnInit(): void {
    this.seasonService.getCurrentCollegeSeason()
    this.matchups = matchups;
    this.currentMatchup = this.matchups.schedule[this.matchupNumber];
    this.submitting = false;
    console.log(this.currentMatchup);
  }

  set matchupNumber(value: number) {
    this._matchupNumber = value;
  }

  get matchupNumber(): number {
    return this._matchupNumber;
  }

  set currentMatchup(value: Matchup) {
    this._currentMatchup = value;
  }

  get currentMatchup(): Matchup {
    return this._currentMatchup;
  }

  set submitting(value: boolean) {
    this._submitting = value;
  }

  get submitting(): boolean {
    return this._submitting;
  }

  public submitSelections(formValues): void {
    console.log(formValues);
    this.matchupNumber++;
    this.submitting = true;
    if (this.matchupNumber > this.matchups.schedule.length) {
      return
    } else {
      this.currentMatchup = this.matchups.schedule[this.matchupNumber];
      this.makePick = null;
      this.submitting = false;
      console.log(this.matchupNumber);
    }
  }

}
