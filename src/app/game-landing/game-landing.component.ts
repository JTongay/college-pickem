import { Component, OnInit } from '@angular/core';

import { SeasonService } from '../season.service';
import { ISeason } from '../models/Season';

@Component({
  selector: 'app-game-landing',
  templateUrl: './game-landing.component.html',
  styleUrls: ['./game-landing.component.scss']
})
export class GameLandingComponent implements OnInit {

  private _nflSeason: ISeason;
  private _collegeSeason: ISeason;


	public get nflSeason(): ISeason {
		return this._nflSeason;
	}

	public set nflSeason(value: ISeason) {
		this._nflSeason = value;
	}
  

	public get collegeSeason(): ISeason {
		return this._collegeSeason;
	}

	public set collegeSeason(value: ISeason) {
		this._collegeSeason = value;
	}
  

  constructor(
    private seasonService: SeasonService
  ) { }

  ngOnInit() {
    this.seasonService.getCurrentCollegeSeason();
    this.seasonService.getCurrentNflSeason();
    this.collegeSeason = this.seasonService.currentCollegeSeason;
    this.nflSeason = this.seasonService.currentNflSeason;
    console.log(this.collegeSeason)
    console.log(this.nflSeason)
  }

}
