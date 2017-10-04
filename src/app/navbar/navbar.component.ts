import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() openSideNav = new EventEmitter<boolean>();
  isOpen: boolean = false;
  constructor() { }

  ngOnInit() {  }

  openNav() {
    this.isOpen = !(this.isOpen)
    this.openSideNav.emit(this.isOpen)
    console.log(this.openSideNav)
  }

}
