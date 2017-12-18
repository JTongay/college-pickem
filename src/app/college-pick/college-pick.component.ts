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
    const matchupNumber = new FormControl('1');
    const matchup = new FormArray([])
    this.selectionsForm = new FormGroup({
      selectGame,
      matchupNumber,
      matchup
    });
    console.log(this);
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  submitSelections(formValues) {
    console.log(formValues.value);
  }

  initForm(): void {
    const formControls = this.selectionsForm.get('matchup');
    this.matchups.schedule.forEach((game) => {
      formControls.value.push(this.createGamesFormGroup(game));
      console.log(formControls);
    });
  }

  createGamesFormGroup(game) {
    return this.fb.group({
      gamePick: [game]
    });
  }


}
