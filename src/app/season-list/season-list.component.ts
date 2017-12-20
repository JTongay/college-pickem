import { Component, OnInit, Input } from '@angular/core';
import { ISeason } from '../models/Season'

@Component({
  selector: 'app-season-list',
  templateUrl: './season-list.component.html',
  styleUrls: ['./season-list.component.scss']
})
export class SeasonListComponent implements OnInit {

  @Input() seasonList: ISeason;

  constructor() { }

  ngOnInit() {
  }

}
