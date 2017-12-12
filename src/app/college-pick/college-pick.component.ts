import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { FormGroup, FormControl, FormArray, Validator, FormBuilder } from '@angular/forms';

// Sample Data
import { matchups } from '../matchups.sample';

@Component({
  selector: 'app-college-pick',
  templateUrl: './college-pick.component.html',
  styleUrls: ['./college-pick.component.scss']
})
export class CollegePickComponent implements OnInit, OnChanges {

  matchups: any;
  selectionsForm: FormGroup;
  selectGame: FormControl;
  selectedGames: FormArray;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.matchups = matchups;
    this.selectionsForm = this.fb.group({
      selectedGame: this.fb.array([this.createGame()])
    });
    console.log(this);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  createGame(): FormGroup {
    return this.fb.group({
      matchups: this.matchups
    });
  }

  submitSelections(formValues) {
    console.log(formValues.value);
  }

}
