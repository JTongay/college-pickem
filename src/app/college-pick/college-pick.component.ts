import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validator, FormBuilder } from '@angular/forms';
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
  private currentMatchup: Matchup;
  private matchupNumber: number = 0;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.matchups = matchups;
    this.currentMatchup = this.matchups.schedule[this.matchupNumber];
    console.log(this.currentMatchup);
  }

  public submitSelections(formValues): void {
    console.log(formValues);
  }

}
