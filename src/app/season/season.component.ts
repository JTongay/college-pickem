import { Component, OnInit } from '@angular/core';
import { SeasonService } from '../season.service';
import { ISeason } from '../models/Season';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit {

  private seasonList: ISeason[];

  constructor(
    private seasonService: SeasonService
  ) { }

  ngOnInit(): void {
    this.seasonService.getSeasons().subscribe((res) => {
      console.log(res);
      this.seasonList = res.response;
    })
  }

}
