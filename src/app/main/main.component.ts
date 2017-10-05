import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input() isOpen: boolean;
  openIt: boolean = false;

  constructor() { }

  ngOnInit() {
    console.log(this.isOpen);
  }

  openNav(open: boolean) {
    this.openIt = open;
  }

  closeNav(open: boolean) {
    this.openIt = !open;
  }

}
