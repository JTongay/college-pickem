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

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.matchups = matchups;
    const selectGame = new FormControl();
    const matchupNumber = new FormControl();
    this.selectionsForm = new FormGroup({
      selectGame,
      matchupNumber
    });
    console.log(this.selectionsForm);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  submitSelections(formValues) {
    console.log(formValues.value);
  }

}
