import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISeason } from '../models/Season';
import { dateValidator } from '../validators/date';

@Component({
  selector: 'app-season-form',
  templateUrl: './season-form.component.html',
  styleUrls: ['./season-form.component.scss']
})
export class SeasonFormComponent implements OnInit {

  seasonForm: FormGroup;
  league: FormControl;
  startDate: FormControl;
  endDate: FormControl;
  activeSeason: FormControl;
  possibleLeagues: String[] = ['NFL', 'NCAA'];

  constructor() { }

  ngOnInit() {
    this.league = new FormControl();
    this.startDate = new FormControl();
    this.endDate = new FormControl(new Date(), [Validators.required]);
    this.activeSeason = new FormControl(new Date(), [Validators.required]);
    this.seasonForm = new FormGroup({
      league: this.league,
      startDate: this.startDate,
      endDate: this.endDate,
      activeSeason: this.activeSeason
    });
  }

  submitSeason(formValue) {
    console.log(formValue.value);
  }

}
