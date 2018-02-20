import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISeason } from '../models/Season';
import { DateValidator } from '../validators/date';
import { SeasonService } from '../season.service';

@Component({
  selector: 'app-season-form',
  templateUrl: './season-form.component.html',
  styleUrls: ['./season-form.component.scss']
})
export class SeasonFormComponent implements OnInit {

  private seasonForm: FormGroup;
  private league: FormControl;
  private startDate: FormControl;
  private endDate: FormControl;
  private activeSeason: FormControl;
  private possibleLeagues: String[] = ['NFL', 'NCAA'];
  private possibleStatus: { text: string, value: boolean}[] = [
    {
      text: 'active',
      value: true
    },
    {
      text: 'inactive',
      value: false
    }
  ];

  constructor(
    private seasonService: SeasonService
  ) { }

  ngOnInit(): void {
    this.league = new FormControl();
    this.startDate = new FormControl(new Date(), [Validators.required]);
    this.endDate = new FormControl(new Date(), [Validators.required]);
    this.activeSeason = new FormControl(true, [Validators.required]);
    this.seasonForm = new FormGroup({
      league: this.league,
      startDate: this.startDate,
      endDate: this.endDate,
      activeSeason: this.activeSeason
    });
  }

  submitSeason(formValue): void {
    console.log(formValue.value);
  }



}
