import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISeason } from '../models/Season';

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
    this.endDate = new FormControl();
    this.activeSeason = new FormControl();
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
