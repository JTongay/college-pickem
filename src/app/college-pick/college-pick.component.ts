import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { matchups } from '../matchups.sample';

@Component({
  selector: 'app-college-pick',
  templateUrl: './college-pick.component.html',
  styleUrls: ['./college-pick.component.scss']
})
export class CollegePickComponent implements OnInit {

  matchups: any;

  constructor() { }

  ngOnInit() {
    this.matchups = matchups;
  }

}
