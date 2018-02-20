import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validator, FormBuilder, NgModel } from '@angular/forms';
import { Matchup } from '../models/Matchup';

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
  public makePick: NgModel;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.matchups = matchups;
    this.currentMatchup = this.matchups.schedule[this.matchupNumber];
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

  public submitSelections(formValues): void {
    console.log(formValues);
    this.matchupNumber++;
    this.currentMatchup = this.matchups.schedule[this.matchupNumber];
    this.makePick = null;
    console.log(this.matchupNumber);
  }

}
