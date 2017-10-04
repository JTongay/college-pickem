import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() openSideNav = new EventEmitter<boolean>();
  open: boolean = false;
  constructor() { }

  ngOnInit() {  }

  openNav(isOpen: boolean) {
    isOpen = !(isOpen)
    this.openSideNav.emit(isOpen)
    console.log(isOpen)
  }

}
