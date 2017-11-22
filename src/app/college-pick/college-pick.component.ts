import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator } from '@angular/forms';

// Sample Data
import { matchups } from '../matchups.sample';

@Component({
  selector: 'app-college-pick',
  templateUrl: './college-pick.component.html',
  styleUrls: ['./college-pick.component.scss']
})
export class CollegePickComponent implements OnInit {

  matchups: any;
  selectionsForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.matchups = matchups;
    this.selectionsForm = new FormGroup({});
  }

  submitSelections(formValues) {
    console.log(formValues.value);
  }

}
