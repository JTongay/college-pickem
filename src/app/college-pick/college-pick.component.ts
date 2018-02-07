import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validator, FormBuilder } from '@angular/forms';

// Sample Data
import { matchups } from '../matchups.sample';

@Component({
  selector: 'app-college-pick',
  templateUrl: './college-pick.component.html',
  styleUrls: ['./college-pick.component.scss']
})
export class CollegePickComponent implements OnInit {

  matchups: any;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.matchups = matchups;
  }

  submitSelections(formValues) {
    console.log(formValues.value);
  }

}
